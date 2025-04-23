"use client";

import React, { useEffect, useState } from 'react'
import SkillMobile from './SkillMobile';
import Container from './Container';

const Skill = () => {
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
    <section id="skills">
      {isDesktop ? (
        <div className="bg-[#f5f5f5]">
          <Container className="grid md:grid-cols-[repeat(2,1fr)] gap-y-8 gap-x-12 text-black md:py-20">
            <div className="pb-10 lg:px-6">
              <h2 className="text-2xl font-bold my-4">My Skills</h2>
              <p className="font-bold text-xl mb-3">
                See what skills I have to be a part of your project.
              </p>
              <p className="w-full leading-relaxed">
                I am very experienced and can offer a range of contemporary to traditional design. I am  fully conversant with several coding languages and concepts. My experience also allows me to advice my clients to make informed choices about the design and implementation of the project. My expertise ensures that each client can be confident about user interface, user experience, e.t.c, which all contribute to the finished project being unique, innovative, and completed to the highest standards.
              </p>
            </div>
            <div className="pt-6 grid grid-cols-[1fr_1fr] gap-5">
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
          </Container>
        </div>
      ) : (
        <SkillMobile />
      )}
    </section>
  )
}

export default Skill