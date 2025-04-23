"use client";

import React, { useEffect, useState } from "react";
import { project } from "../constants";
import ProjectMobile from "./ProjectMobile";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import Container from "./Container";
import Image from "next/image";


const Project = () => {
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
    <section id='project' className="bg-black">
      {isDesktop ? (
        <Container className='md:py-20'>
          <div className='ml-5 my-8'>
            <h1 className='text-2xl font-bold'>Explore some of my works</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
              project.map((item, i) => (
                <div key={i} className="shadow-lg shadow-[#786b6b] group container rounded-md mx-auto relative">
                  <Image 
                    src={item.image}
                    alt={item.name}
                    width={520} 
                    height={300}/>

                  <div className='w-full h-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 group-hover:bg-[#fffafa] text-black absolute top-0 left-0 px-6'>
                    <h3 className='lg:text-xl font-semibold pb-3'>{item.name}</h3>
                    <p className='pb-1 text-xs lg:text-sm'>{item.description}</p>
                    <div className='flex gap-3'>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" 
                      className="text-xl lg:text-2xl">
                        <BsLink45Deg />
                      </a>
                      <a href="https://github.com/atinukeanimashaun"
                      target="_blank" rel="noopener noreferrer" 
                      className="text-xl lg:text-2xl">
                        <BsGithub />
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </Container>
      ) : (
        <ProjectMobile />
      )}
    </section>

  )
}

export default Project
