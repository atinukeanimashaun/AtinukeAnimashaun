"use client";

import { reviews } from '@/constants';
import React, { useCallback, useState } from 'react'
import { BiChevronDown, BiChevronLeftCircle, BiChevronRightCircle, BiChevronUp } from 'react-icons/bi';

const RecommendMobile = () => {
  const [index, setIndex] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState(false);

  const prevSlide = useCallback(() => {
    setIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  }, []);

  return (
    <div className='border-y-2 border-y-[#f5f5f5] py-3'>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='flex justify-between items-center w-full px-4 md:px-8'
      >
        <h2 className='text-lg font-semibold py-3'>
          Recommendation
        </h2>
        <p className='text-3xl'>
          {accordionOpen ? <BiChevronUp /> : <BiChevronDown />}
        </p>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out bg-[#f5f5f5] text-black p-10 space-y-4 relative ${accordionOpen ? "block" : "hidden"}`}>
        <div className="flex gap-4 transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}>
          {reviews.map((item) => (
            <div key={item.id}
              className="w-[95%] md:w-[50%] flex-shrink-0 p-1">
              <div className="border border-black p-8 rounded space-y-2">
                <p className="text-[18px]">
                  <span className="text-2xl pr-2">&#10077;</span>{item.comment}
                </p>

                <p className="font-semibold text-[18px]">
                  {item.name}
                </p>

                <p className="text-[15px]">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-6 my-8">
          <button onClick={prevSlide} className="">
            <BiChevronLeftCircle className="w-10 h-10 text-black" />
          </button>

          <button onClick={nextSlide} className="">
            <BiChevronRightCircle className="w-10 h-10 text-black" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecommendMobile