"use client"

import Container from "@/components/Container";
import Header from "@/components/Header";
import Request from "@/components/Request";
import { skillsItems, SocialMedia, toolsItems } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import ContactCard from "@/components/ContactCard";

export default function Service2() {
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
              Website Design & Development
            </h1>

            <div className="my-3 flex flex-col md:flex-row">
              <Link href="/"
                className="font-bold text-[18px] cursor-pointer hover:underline"
              >
                Atinuke Animashaun
              </Link>

              <div className="border-r-2 border-[#fffafa] mx-4 hidden md:block"></div>

              <div className='flex'>
                <BsStarFill className="mt-1 mr-2" />
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
              I use a strategic approach in Website Design and Development to ensure that your website accurately reflects your brand and serves as a powerful tool to achieve your business goals.
            </p>

            <p className="text-[16px]">
              During our cooperation, we have an average of 3-4 feedback calls and up to 3 revisions.
            </p>

            <p className="text-[16px]">
              Please note that the price for the Website Design and Development service may vary depending on the complexity of the project, desired features, and the number of pages required.
            </p>
          </div>

          <div className="space-y-3 my-5">
            <h2 className="mt-7 text-[20px]">what&rsquo;s included</h2>

            <ul className="space-y-4 list-[square] pl-4">
              <li className="space-y-1">
                <h3 className="font-bold capitalize text-[18px]">
                  Creation of Website Structure and Unique Style
                </h3>

                <p className="text-[16px]">
                  It&rsquo;s a strategic part. We will create a website layout, color scheme, typography, and other visual elements to ensure the website's aesthetics match your brand vision and goals. Based on website&rsquo;s purpose, target audience, and desired features.
                </p>
              </li>

              <li className="space-y-1">
                <h3 className="font-bold capitalize text-[18px]">
                  Figma Custom Design & Web Development
                </h3>

                <p className="text-[16px]">Creative and tech part. You&rsquo;ll get a fully responsive, user-friendly, and bug-free website. It includes basic SEO optimization (correct display of website pages in search engines and social networks), domain and data reception forms connection and integration of additional services if needed.</p>
              </li>

              <li className="space-y-1">
                <h3 className="font-bold capitalize text-[18px]">
                  Post-launch Tech Support
                </h3>

                <p className="text-[16px]">
                  Caring part. Tech support + heatmaps analysis for 2 weeks after launch. Making improvements based on analytics if needed.
                </p>
              </li>
            </ul>
          </div>

          {/* REQUEST FOR SMALL SCREEN */}
          <div className="block lg:hidden border-t-2 border-[#fffafa]">
            <div className='my-6'>
              <h3 className="font-bold text-[20px] capitalize mb-2">
                Service details
              </h3>

              <div className='flex space-x-2 px-1 md:px-12'>
                <CiCalendarDate className='mt-1' />
                <p className="text-[16px]">
                  3+ weeks
                </p>
              </div>
            </div>

            <div className="my-8">
              <h3 className="font-bold text-xl capitalize mb-4">
                skills
              </h3>

              <div className="grid md:grid-cols-2 gap-4 px-1 md:px-12">
                {
                  skillsItems.slice(0, 2).map((item, i) => (
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

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-1 md:px-12">
                {
                  toolsItems
                  .filter(item => item.id === "1" || (Number(item.id) >= 6 && Number(item.id) <= 13))
                  .map((item, i) => (
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
          <Request toggleState={toggleState} toggleTab={toggleTab} page="service2" />
        </div>
        <ContactCard toggleState={toggleState} toggleTab={toggleTab} />
      </Container>
    </div>
  );
}