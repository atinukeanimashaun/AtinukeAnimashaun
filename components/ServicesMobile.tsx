"use client";

import { service } from '@/constants';
import Link from 'next/link';
import React, { useState } from 'react'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const ServicesMobile = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className='border-t-2 border-t-[#f5f5f5] py-3 bg-black'>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='flex justify-between items-center w-full px-8'
      >
        <h2 className='text-lg font-semibold py-3'>
          What i Do
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
        {service.map((service, index) => (
          <div key={index} className="">
            <h1 className="text-xl font-medium pt-4">
              {service.title}
            </h1>
            <div className="flex flex-col justify-between mt-2 py-3">
              <p className="text-xl pb-2">Contact For Pricing</p>
              <Link href={service.link}>
                <button className="bg-black md:text-xl text-[#f5f5f5] py-3 px-5 rounded-full hover:duration-[.3s] hover:bg-[#f5f5f5] hover:text-black hover:border-black hover:border-solid hover:border-2">
                  View Service
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesMobile
