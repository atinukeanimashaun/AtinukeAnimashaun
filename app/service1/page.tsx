"use client"

import ContactCard from "@/components/ContactCard";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Request from "@/components/Request";
import { skillsItems, SocialMedia, toolsItems } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";

export default function Service1() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index: number) => {
    setToggleState(index);
  }
  useEffect(() => {
    document.body.style.overflow = toggleState > 0 ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [toggleState]);

  return (
    <div>
      <Header toggleState={toggleState} toggleTab={toggleTab} />

      <Container className="bg-black pt-[7rem] lg:pt-[10rem] md:pb-[4%] md:px-12 lg:px-5 xl:px-0 flex flex-col lg:flex-row justify-between gap-5">
        <div className="w-full lg:w-[65%]">
          <div className="space-y-4 my-8">
            <h1 className="font-bold text-3xl lg:text-5xl">
              Website in a Week | Shopify, Wordpress, Webflow
            </h1>

            <div className="my-3 flex flex-col md:flex-row">
              <Link href="/"
                className="font-bold text-[18px] cursor-pointer hover:underline"
              >
                Atinuke Animashaun
              </Link>

              <div className="border-r-2 border-[#fffafa] mx-4 hidden md:block"></div>

              <div className='flex'>
                <BsStarFill className="mt-1 mr-3" />
                <p className='font-bold'>
                  Recommend 4x
                </p>
              </div>
            </div>
          </div>

          {/* REQUEST FOR SMALL SCREEN */}
          <div className="border-y border-[#fffafa] my-12 py-6 text-center block lg:hidden">
            <p className="text-xl capitalize mt-2">
              contact for pricing
            </p>

            <button onClick={() => toggleTab(1)}
            className="font-bold uppercase bg-[#fffafa] text-black my-5 py-3 px-10 border rounded-full hover:bg-black hover:text-[#fffafa]">
              request to book
            </button>
          </div>

          <div className="space-y-5 my-5">
            <h3 className="mt-7 text-[20px]">
              About The Service
            </h3>

            <p className="text-[16px]">
              Are you in search of a swift and efficient way to establish a compelling online presence? The Ready-to-Launch Website in a Week service is tailored for individuals, startups, and young companies looking to express themselves in the digital world.
            </p>

            <p className="text-[16px]">
              This service is designed with the understanding that <strong>time is of the essence</strong> and you&rsquo;re determined to <strong>achieve quick results</strong>. A professional, fully customized website can be yours in just one week.
            </p>
          </div>

          <div className="space-y-5 my-5">
            <h1 className="font-bold uppercase text-[20px]">faq:</h1>

            <h2 className="font-bold text-[18px]">
              What if I don&rsquo;t have a clear brand vision?
            </h2>

            <p className="text-[16px]">No worries! I will assist you in defining and refining your brand vision. We work closely to understand your goals and preferences, ensuring the website aligns with your vision.</p>

            <h2 className="font-bold text-[18px]">
              How do I get started?
            </h2>

            <p className="text-[16px] border-b-2 pb-5">Getting started is easy. Contact me for a consultation, and I&rsquo;ll guide you through the process. We&rsquo;ll discuss your requirements, timeline, and any special features you&rsquo;d like to incorporate into your website.
            </p>

            <p className="text-[16px]">
              In just one week, you&rsquo;ll have a stunning website that not only represents your brand but also embodies your values. This is more than just a website; it&rsquo;s your digital storefront, a powerful tool to showcase your services, products, or ideas to the world.
            </p>

            <h2 className="font-bold text-[18px]">Can I request additional pages or features?</h2>

            <p className="text-[16px]">
              Yes, absolutely! Customizable packages are available to accommodate specific needs. Just let us know what you require, and we&rsquo;ll provide a tailored solution.
            </p>

            <h2 className="font-bold text-[18px]">
              Is Webflow subscription and domain registration included?</h2>

            <p className="text-[16px] ">
              Webflow subscription and domain registration are not included in this package. However, I&rsquo;ll assist you in setting up hosting and domain services if needed.
            </p>

            <p className="text-[16px]">
              Get in touch to unlock the potential of a strong online presence together.
            </p>
          </div>

          <div className="space-y-3 my-5">
            <h2 className="mt-7 text-[20px]">what&rsquo;s included</h2>

            <ul className="space-y-4 list-[square] pl-4">
              <li className="space-y-1">
                <h3 className="font-bold capitalize text-[18px]">
                  5-page website
                </h3>
                <p className="text-[16px]">Crafted to represent your brand and showcase your content effectively.</p>
              </li>

              <li className="space-y-1">
                <h3 className="font-bold capitalize text-[18px]">
                  Pre-Made Layouts with Custom Structure
                </h3>
                <p className="text-[16px]">Utilizing pre-made layouts streamlines the development process while customizing them to suit your unique structure and requirements.</p>
              </li>

              <li className="space-y-1">
                <h3 className="font-bold capitalize text-[18px]">
                  Custom Branding
                </h3>
                <p className="text-[16px]">We will ensure the website aligns with your brand vision, encompassing typography, color schemes, and accents. Your website will exude professionalism and uniqueness.</p>
              </li>

              <li className="space-y-1">
                <h3 className="font-bold capitalize text-[18px]">
                  Copywriting Services
                </h3>
                <p className="text-[16px]">The website&rsquo;s copy will be reviewed and refined to ensure clear communication of your ideas, values, and offerings. Your message has to resonate with your target audience.</p>
              </li>

              <li className="space-y-1 pb-10">
                <h3 className="font-bold capitalize text-[18px]">
                  Fast Turnaround
                </h3>
                <p className="text-[16px]">Recognizing the importance of a quick launch, your website will be ready within just one week.</p>
              </li>
            </ul>
          </div>

          {/* REQUEST FOR SMALL SCREEN */}
          <div className="block lg:hidden border-t-2 border-[#fffafa]">
            <div className="my-8">
              <h3 className="font-bold text-xl capitalize mb-4">
                skills
              </h3>

              <div className="grid md:grid-cols-2 gap-4 px-1 md:px-12">
                {
                  skillsItems.map((item, i) => (
                    <div key={i}>
                      <p className="border border-gray-400 rounded-full py-2 text-center text-sm">
                        {item.name}
                      </p>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="my-8">
              <h3 className="font-bold text-xl capitalize mb-4">
                Tools
              </h3>

              <div className="grid grid-cols-2 gap-4 px-1 md:px-12">
                {
                  toolsItems.slice(0, 5).map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-center items-center border border-gray-400 rounded-full py-2 text-sm">
                        <p className='mr-2'>{item.icon}</p>
                        {item.name}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="my-8">
              <h3 className="font-bold text-xl capitalize mb-4">
                Links
              </h3>
              <div className='flex gap-6 px-12'>
                {
                  SocialMedia.map((item, i) => (
                    <div key={i}>
                      <a className='text-2xl' href="{item.link}">{item.icon}</a>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="border-y-2 border-[#fffafa] py-16 my-12 text-center">
            <h1 className="font-bold text-xl md:text-3xl uppercase">work with me</h1>
            <button onClick={() => toggleTab(1)}
            className="uppercase font-bold my-5 py-3 px-10 lg:px-16 border bg-[#fffafa] text-black rounded-full hover:bg-black hover:text-[#fffafa]">
              request to book
            </button>
          </div>
        </div>

        <div className="hidden lg:block lg:w-[35%] lg:sticky top-28 self-start">
          <Request toggleState={toggleState} toggleTab={toggleTab} page="service1" />
        </div>
        <ContactCard toggleState={toggleState} toggleTab={toggleTab} />
      </Container>
    </div>
  );
}