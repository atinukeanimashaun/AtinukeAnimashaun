import React from 'react'
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-black text-[#f5f5f5] py-10">
      <div>
        <div className='text-center mb-3 flex gap-4 justify-center items-center'> 
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
        </div>
        <div>
          <p>Tinu.All right reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
