import React from 'react';
import { BsX } from 'react-icons/bs';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

type ContactProps = {
  toggleState: number;
  toggleTab: (index: number) => void;
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const ContactCard = ({ toggleState, toggleTab }: ContactProps) => {
  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Message sent!');
        resetForm();
        toggleTab(0);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error('Contact form error:', err);
      alert('Something went wrong. Try again.');
    }
  };

  if (toggleState !== 1) return null;

  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.8)] z-[1000] flex justify-center items-start md:items-center p-4 overflow-y-auto"
      onClick={() => toggleTab(0)}
    >
      <div
        className="relative bg-[#fffafa] text-black w-full max-w-2xl mx-auto rounded-xl mt-10 md:mt-0 p-6 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-2xl"
          onClick={() => toggleTab(0)}
          aria-label="Close"
        >
          <BsX />
        </button>

        <div className="flex items-center gap-4 mb-5">
          <div className="w-[150px] md:w-[100px] h-[100px] bg-black rounded-full">
            {/* <img src="" alt="tinu" /> */}
          </div>

          <div>
            <h2 className="font-semibold text-lg md:text-xl">Request to work with Atinuke Animashaun</h2>
            <p className="text-base pt-1">You have an idea. Let&rsquo;s talk</p>
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="flex flex-col sm:flex-row gap-8 items-center mb-5">
                <div className="sm:w-1/2 w-full">
                  <label htmlFor="firstName" className="mb-1 font-medium">First Name</label>

                  <Field
                    id="firstName"
                    name="firstName"
                    className={`border rounded-lg mt-1 w-full h-12 px-3 bg-[#fffafa] ${errors.firstName && touched.firstName ? 'border-red-500' : 'border-black'}`}
                  />

                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="sm:w-1/2 w-full">
                  <label htmlFor="lastName" className="mb-1 font-medium">Last Name</label>

                  <Field
                    id="lastName"
                    name="lastName"
                    className={`border rounded-lg mt-1 w-full h-12 px-3 bg-[#fffafa] ${errors.lastName && touched.lastName ? 'border-red-500' : 'border-black'}`}
                  />

                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                </div>
              </div>

              <div className="w-full mb-5">
                <label htmlFor="email" className="mb-1 font-medium">Email</label>

                <Field
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`border rounded-lg mt-1 w-full h-12 px-3 bg-[#fffafa] ${errors.email && touched.email ? 'border-red-500' : 'border-black'
                    }`}
                />

                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="w-full mb-5">
                <Field
                  name="message"
                  as="textarea"
                  rows={5}
                  cols="30"
                  placeholder="Start a conversation with Tinu..."
                  className={`border border-black rounded-lg mt-1 p-4 w-full bg-[#fffafa] ${errors.message && touched.message ? 'border-red-500' : 'border-black'
                    }`}
                />

                <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-[#fffafa] bg-black py-3 px-8 text-center rounded-full transition-all duration-300 hover:text-black hover:bg-[#fffafa] hover:border-2 hover:border-black"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactCard;
