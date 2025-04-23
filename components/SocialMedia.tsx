import React from 'react'
import { BsX, BsLinkedin, BsGithub, BsDiscord, BsTwitterX } from "react-icons/bs";

interface SocialMediaProps {
  showModal: boolean;
  toggleModal: () => void; 
}

const SocialMedia: React.FC<SocialMediaProps> = ({showModal, toggleModal}) => {
  return (
    <div id="social" className={showModal ? "fixed left-0 bottom-0  w-full z-[1000] opacity-100 bg-[rgba(0,_0,_0,_0.8)] duration-[.3s] overflow-y-auto" : "opacity-0 invisible duration-[.3s] "}>
      <div className='bg-[#f5f5f5] text-black py-5 rounded-t-xl'>
        <div onClick={toggleModal}
        className="py-3 text-2xl absolute top-0 right-5">
          <BsX className="w-10 h-10" />
        </div>
        <div className='flex flex-col my-6 pl-6 space-y-3 cursor-pointer w-full'>
          <a href="https://www.linkedin.com/in/atinuke-animashaun-84a8aa272/" 
          className=' text-xl text-blue-800 flex space-x-4 p-3 hover:bg-[#d4d3d39c]'>
            <BsLinkedin />
            <span className='capitalize text-black'>linkedin</span>
          </a>
          <a href="https://github.com/atinukeanimashaun"
          className=' text-xl flex space-x-4 p-3 hover:bg-[#d4d3d39c]'>
            <BsGithub />
            <span className='capitalize text-black'>github</span>
          </a>
          <a href="https://twitter.com/atinukefunmi1"
          className=' text-xl flex space-x-4 p-3 hover:bg-[#d4d3d39c]'>
              <BsTwitterX />
              <span className='capitalize text-black'>twitter</span>
            </a>
          <a href="/"
          className=' text-xl text-purple-800 flex space-x-4 p-3 hover:bg-[#d4d3d39c]'>
            <BsDiscord />
            <span className='capitalize text-black'>discord</span>
          </a>
      </div>
      </div>
    </div>
  )
}

export default SocialMedia
