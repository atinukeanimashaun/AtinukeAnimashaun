"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import ContactCard from "@/components/ContactCard";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Recommend from "@/components/Recommend";
import Services from "@/components/Services";
import Skill from "@/components/Skill";
import { useEffect, useState } from "react";


export default function Home() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index: number) => {
    setToggleState(index);
  }

  useEffect(() => {
    document.body.style.overflow = toggleState > 0 ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [toggleState]);


  return (
    <>
    <Header toggleState={toggleState} toggleTab={toggleTab} />
    
    <div className={'h-full w-full text-white' + ' ' + (toggleState > 0 ? 'overflow-y-hidden' : 'overflow-y-auto')}>
      <Hero toggleState={toggleState} toggleTab={toggleTab} />

      <Skill />

      <Project />

      <Services />

      <About />

      <Recommend />

      <Contact toggleState={toggleState} toggleTab={toggleTab} />
      <ContactCard toggleState={toggleState} toggleTab={toggleTab} />
    </div>
    </>
  );
}
