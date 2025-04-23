"use client";

import React, { useEffect, useState } from "react"
import AboutMobile from "./AboutMobile"
import { BsDiscord, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import Container from "./Container";

const About = () => {
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
    <section id="about"  className="bg-black">
      {isDesktop ? (
        <Container className="flex flex-col w-full md:py-20 ">
          <h1 className="text-3xl font-bold mt-8 md:my-10">
            Meet Tinu
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 lg:px-16">
            <div className="hidden md:block bg-white w-full rounded-full">

            </div>
            <div className="mt-8 md:pt-16">
              <p className="w-full text-lg">
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

                {/* <a href="/"
                  aria-label="Discord"
                  className="text-2xl bg-blue-500 p-1 rounded-xl"
                >
                  <BsDiscord />
                </a> */}
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <AboutMobile />
      )}
    </section>
  )
}

export default About