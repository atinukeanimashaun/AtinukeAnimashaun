"use client";

import React, { useEffect, useState } from "react";
import ServicesMobile from "./ServicesMobile";
import Link from "next/link";
import { service } from "@/constants";
import Container from "./Container";

const Services = () => {
  const [isDesktop, setIsDesktop] = useState<null | boolean>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize(); // initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isDesktop === null) return null;

  return (
    <section id="services">
      {isDesktop ? (
        <div className="bg-[#f5f5f5]">
          <Container className="w-full h-full md:py-20 text-black">
            <div>
              <h1 className="text-2xl font-bold">
                WHAT I DO
              </h1>
            </div>
            <div className="md:mt-10">
              {service.map((service, index) => (
                <div key={index}>
                  <div className="hidden md:block border-t-2 border-black animate-[design_2s]"></div>
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-medium pt-4">
                    {service.title}
                  </h1>
                  <div className="flex flex-col md:flex-row justify-between mt-2 py-3 md:p-5">
                    <p className="text-xl pb-2">Contact For Pricing</p>
                    <Link href={service.link}>
                      <button className="bg-black md:text-xl text-[#f5f5f5] md:ml-16 py-3 px-3 md:px-8 rounded-full hover:duration-300 hover:bg-[#f5f5f5] hover:text-black hover:border-black hover:border-2">
                        View Service
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      ) : (
        <ServicesMobile />
      )}
    </section>
  )
}

export default Services
