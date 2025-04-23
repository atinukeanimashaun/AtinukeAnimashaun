"use client"

import { links } from '@/constants';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsCursor, BsShare, BsThreeDots, BsX } from 'react-icons/bs';
import SocialMedia from './SocialMedia';

interface HeaderProps {
  toggleState: number;
  toggleTab: (index: number) => void;
}


const Header: React.FC<HeaderProps> = ({ toggleTab }) => {
  const [nav, setNav] = useState(false);
  const [showModal, setModal] = useState(false)

  const toggleMenu = () => {
    setNav(!nav);
  };

  const toggleModal = () => {
    setModal(!showModal);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center bg-black py-12 px-[5%] md:px-[3%] xl:px-[5%] shadow-md z-50">
      <div className="flex justify-between items-center w-full">
        <Link href="/" className="w-full text-lg xl:text-xl font-semibold">Atinuke Animashaun</Link>

        <div className="hidden lg:flex items-center space-x-6 text-white font-semibold text-lg">
          {links.map(({ link, title }) => (
            <a
              key={link}
              href={link}
              className="p-4 cursor-pointer md:text-sm lg:text-lg transition-all duration-500 "
            >
              {title}
            </a>
          ))}

          <button onClick={() => toggleTab(1)}
          className=" md:w-[150px] lg:w-[200px] p-3 cursor-pointer bg-[#f5f5f5] text-base md:text-sm lg:text-lg text-black rounded-full duration-300 hover:border-2 hover:border-solid hover:bg-black hover:text-[#f5f5f5]">
            WORK WITH ME
          </button>
        </div>

        {/* User Actions */}
        <div className="ml-2 lg:hidden flex gap-4" onClick={toggleMenu}>
          {nav ? (
            <BsThreeDots className="w-10 h-10 p-1 text-white" />
          ) : (
            <BsThreeDots className="w-10 h-10 p-1 text-white" />
          )}
        </div>
      </div>

      {/* Mobile Navigation Toggle */}
      <nav className={`${nav ? "fixed translate-x-0" : "hidden translate-x-full"
        } left-0 bottom-0 w-full h-[25%] bg-[#f5f5f5] text-black rounded-t-xl`}>
        <div onClick={() => setNav(!nav)} className="py-3 text-2xl absolute top-0 right-5">
          <BsX className="w-10 h-10" />
        </div>

        <div className="flex flex-col mt-10 space-y-3 cursor-pointer">
          <button onClick={() => toggleTab(1)}
            className="flex text-xl mx-6 py-2 px-3 hover:bg-[#d4d3d39c]">
            <BsCursor className="mr-4 text-2xl" />
            Get in Touch
          </button>

          <button onClick={toggleModal}
            className="flex text-xl mx-6 py-2 px-3 hover:bg-[#d4d3d39c]">
            <BsShare className="mr-4 text-2xl" />
            Share Portfolio
          </button>
          <SocialMedia toggleModal={toggleModal} showModal={showModal} />
        </div>
      </nav>
    </div>
  )
}

export default Header
