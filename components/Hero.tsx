import React from 'react'
import Avatar from "@/components/Avatar";
import Container from "@/components/Container";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";

type ContactProps = {
  toggleState: number;
  toggleTab: (index: number) => void;
};

const Hero = ({ toggleTab }: ContactProps) => {
  return (
    <div className='flex flex-col items-center justify-center h-[80%] pt-[10rem] md:pb-[4%] bg-black'>
        <Container>
          <div className='mb-16 pt-16 md:hidden block bg-white w-[clamp(250px,_50%,_400px)] h-[250px] rounded-full'>
            {/* <Image src="" alt="tinu" className='' /> */}
          </div>

          <div>
            <h1 className='font-bold text-xl md:text-3xl lg:text-6xl pb-2'>Hi, I&#8217;m Tinu</h1>

            <h2 className='text-lg lg:text-4xl font-semibold text-[#ccd6f6]'>I&#8217;m a Front-end Engineer.</h2>

            <p className='md:text-xl w-full text-[#a5aabb] pt-2'>
              Self-taught frontend engineer with a passion for exploring new technologies. A quick learner with a strong ability to grasp and retain complex concepts, I thrive in dynamic environments. I am highly adaptable, collaborative, and always bring my best to any team, ensuring smooth teamwork and innovative problem-solving.
            </p>

            <div className='mt-8 md:mb-4 text-center md:text-left'>
              <button onClick={() => toggleTab(1)}
              className='lg:hidden bg-[#f5f5f5] text-black mr-6 my-8 py-3 px-8 rounded-full transition-all duration-500 cursor-pointer hover:bg-black hover:text-[#f5f5f5] hover:border-[#f5f5f5] hover:border-solid hover:border-2'>
                Hire Me
              </button>

              <a href="AtinukeAnimashaunResume.pdf" download="AtinukeAnimashaun AtinukeAnimashaunResume.pdf" className="w-full bg-[#f5f5f5] md:text-xl text-black md:ml-6 py-3 px-8 rounded-full transition-all duration-500 cursor-pointer hover:bg-black hover:text-[#f5f5f5] hover:border-[#f5f5f5] hover:border-solid hover:border-2">
                Download cv
              </a>
            </div>
          </div>

          <div className="md:hidden mb-8 ">
            <Avatar />

            <div className='my-2 cursor-pointer flex  gap-5 text-center'>
              <a
                href="https://www.linkedin.com/in/atinuke-animashaun-84a8aa272/"
                aria-label="LinkedIn"
                className="text-blue-600 text-2xl py-2">
                <BsLinkedin />
              </a>

              <a
                href="https://github.com/atinukeanimashaun"
                aria-label="GitHub"
                className="text-2xl py-2">
                <BsGithub />
              </a>

              {/* <a href="/"
                aria-label="Discord"
                className="text-2xl bg-blue-500 p-2 rounded-xl"
              >
                <BsDiscord />
              </a> */}
            </div>
          </div>
        </Container>
      </div>
  )
}

export default Hero