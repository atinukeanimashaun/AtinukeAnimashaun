import React, { useState } from 'react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const SkillMobile = () => {
  const [ accordionOpen, setAccordionOpen ] = useState(false); 

  return (
    <div className='border-t-2 border-t-[#f5f5f5] bg-black py-3'>
        <button
          onClick={() => setAccordionOpen(!accordionOpen)} 
          className='flex justify-between items-center w-full px-8'
        >
          <h2 className='text-lg font-semibold py-3'>
           My Skill
          </h2>
          <p className='text-3xl'>
           {accordionOpen ? <BiChevronUp /> : <BiChevronDown />}
          </p>
        </button>

        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out bg-[#f5f5f5] text-black p-8 space-y-4 ${
          accordionOpen 
            ? "grid-row-[1fr] block" 
            : "grid-row-[0fr] hidden"
        }`}
        >
          <p className='font-bold text-xl mb-2'>
            See what skills i have to be a part of your project.
          </p>
          <p className='w-full text-[18px] leading-relaxed'>
            I am very experienced and can offer a range of contemporary to traditional design. I am  fully conversant with several coding languages and concepts. My experience also allows me to advice my clients to make informed choices about the design and implementation of the project. My expertise ensures that each client can be confident about user interface, user experience, e.t.c, which all contribute to the finished project being unique, innovative, and completed to the highest standards.
          </p>
          <div className="py-6 grid grid-cols-[1fr_1fr] gap-5">
            {/* Skill Bars */}
            {[
              { skill: "HTML & CSS", className: "progress-html" },
              { skill: "JavaScript", className: "progress-javascript" },
              { skill: "Bootstrap", className: "progress-bootstrap" },
              { skill: "React.js", className: "progress-react" },
              { skill: "Tailwind CSS", className: "progress-tailwind" },
              { skill: "Next.js", className: "progress-next" },
              { skill: "TypeScript", className: "progress-typescript" },
              { skill: "WordPress", className: "progress-word" },
              { skill: "Shopify", className: "progress-shopify" },
            ].map((item, index) => (
              <div key={index} className="mb-1">
                <div className="flex justify-between items-center">
                  <p className="text-sm">{item.skill}</p>
                </div>
                <div className="relative w-full h-[10px] bg-white rounded-lg mt-2">
                  <span
                    className={`h-full absolute left-0 bg-black rounded-lg shadow-xl ${item.className}`}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default SkillMobile