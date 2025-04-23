"use client";

import React, { useState } from 'react';
import { project } from "../constants";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import Image from 'next/image';

const ProjectMobile = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className='border-t-2 border-t-[#f5f5f5] py-3'>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='flex justify-between items-center w-full px-8'
      >
        <h2 className='text-lg font-semibold py-3'>
          Explore some of my works
        </h2>
        <p className='text-3xl'>
          {accordionOpen ? <BiChevronUp /> : <BiChevronDown />}
        </p>
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out bg-[#f5f5f5] text-black p-8 space-y-4 ${accordionOpen
          ? "grid-row-[1fr] block"
          : "grid-row-[0fr] hidden"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {
            project.map((item, i) => (
              <div key={i} className="shadow-lg shadow-[#786b6b] group container rounded-md mx-auto relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={520}
                  height={300} />

                <div className='w-full h-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:bg-[#fffafa] text-black absolute top-0 left-0 px-6'>
                  <h3 className='text-xl font-bold pb-2'>{item.name}</h3>
                  <p className='pb-2 text-sm'>{item.description}</p>
                  <div className='flex gap-3'>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" 
                    className="text-4xl">
                      <BsLink45Deg />
                    </a>
                    <a href="https://github.com/atinukeanimashaun"
                    target="_blank" rel="noopener noreferrer"
                    className="text-4xl">
                      <BsGithub />
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectMobile
