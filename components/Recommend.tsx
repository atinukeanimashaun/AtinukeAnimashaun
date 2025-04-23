"use client";

import React, { useCallback, useEffect, useState } from 'react'
import RecommendMobile from './RecommendMobile'
import Container from './Container'
import { reviews } from '@/constants';
import { BiChevronLeftCircle, BiChevronRightCircle } from 'react-icons/bi';

const Recommend = () => {
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState<null | boolean>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize(); // initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  }, []);

  if (isDesktop === null) return null;

  return (
    <div className="bg-black lg:py-20">
      {isDesktop ? (
        <Container className="overflow-hidden">
          <div className="flex gap-5 xl:gap-9 transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}>
            {reviews.map((item) => (
              <div key={item.id}
                className="w-[31%] flex-shrink-0 p-3">
                <div className="border border-[#fffafa] py-8 px-5 xl:px-10 rounded space-y-2">
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

          <div className="flex justify-center items-center gap-6 my-8">
              <button onClick={prevSlide} className="">
                <BiChevronLeftCircle className="w-10 h-10 text-white" />
              </button>

              <button onClick={nextSlide} className="">
                <BiChevronRightCircle className="w-10 h-10 text-white" />
              </button>
          </div>

        </Container>
      ) : (
        <RecommendMobile />
      )}
    </div>
  )
}

export default Recommend


// when i load the page i want the page to the good not showing the part that doesn't have setIsMobile(window.innerWidth >= 1024);