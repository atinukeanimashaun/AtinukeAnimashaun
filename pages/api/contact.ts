import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Configure the Nodemailer transporter for the admin email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email options for the admin (you)
    const mailOptionsToAdmin = {
      from: `"${firstName} ${lastName}" <${email}>`, // Sender's email
      to: process.env.GMAIL_USER,  // Receiver's email (your email)
      subject: 'New Contact Form Submission',
      text: message,
      html: `
        <p><strong>Name:</strong></p><p><strong>From:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email to the admin
    await transporter.sendMail(mailOptionsToAdmin);

    // Email options for the user (auto-response)
    const mailOptionsToUser = {
      from: process.env.GMAIL_USER,  // Your email as the sender
      to: email,  // The user's email
      subject: 'We received your message!',
      text: 'Thank you for reaching out. Our team will get back to you within 24 hours.',
      html: `
        <p>Dear ${firstName},</p>
        <p>Dear ${lastName},</p>
        <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
        <p>Best regards,<br/>Your Company Team</p>
      `,
    };

    // Send the acknowledgment email to the user
    await transporter.sendMail(mailOptionsToUser);

    // Respond to the frontend that the email was sent successfully
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
