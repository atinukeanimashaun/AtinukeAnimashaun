"use client";

import React, { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { BsDiscord, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

const AboutMobile = () => {
  const [ accordionOpen, setAccordionOpen ] = useState(false);

  return (
    <div className='border-t-2 border-t-[#f5f5f5] py-3'>
      <button
          onClick={() => setAccordionOpen(!accordionOpen)} 
          className='flex justify-between items-center w-full px-8'
        >
          <h2 className='text-lg font-semibold py-3'>
          About
        </h2>
         <p className='text-3xl'>
          {accordionOpen ? <BiChevronUp /> : <BiChevronDown />}
          </p>
        </button>

        <div className={`grid  overflow-hidden transition-all duration-300 ease-in-out bg-[#f5f5f5] text-black p-8 space-y-4 ${
          accordionOpen 
            ? "grid-row-[1fr] block" 
            : "grid-row-[0fr] hidden"
        }`}
        > 
          <p className="w-full text-[18px]">
          Hi, I am a website developer with 3+ years experience in website development and a strong business background. My passion lies in creating website experiences that elevate modern companies and boost their brands. Lets collaborate to create a unique and impactful brand that stands out.
          </p>

          <div className='text-center mt-10 flex gap-4'> 
            <a 
            href="https://www.linkedin.com/in/atinuke-animashaun-84a8aa272/"
            className="text-blue-600 text-3xl"
            >
              <BsLinkedin />
            </a>

            <a 
            href="https://github.com/atinukeanimashaun"
            className="text-3xl"
            >
              <BsGithub />
            </a>

            <a 
            href="https://twitter.com/atinukefunmi1"
            className="text-3xl"
            >
              <BsTwitterX />
            </a>

            <a href="/" 
          aria-label="Discord"
            className="text-2xl text-white bg-blue-500 p-1 rounded-xl"
          >
            <BsDiscord />
          </a>
          </div>
        </div>
    </div>
  )
}

export default AboutMobile