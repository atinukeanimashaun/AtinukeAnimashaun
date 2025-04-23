import Link from 'next/link'
import React from 'react'
import { BsStarFill } from 'react-icons/bs'

const Avatar = () => {
  return (
    <div>
      <Link href="/recommend" className='flex hover:underline'>
      <div className="flex items-center gap-4">
        <div className="lg:flex lg:relative hidden">
        <div className="w-[30px] top-0 left-0 z-10">
          {/* <img src={Ellipse2} alt="" /> */}
        </div>
        <div className="w-[30px] absolute top-0 left-3 z-20">
          {/* <img src={Ellipse3} alt="" /> */}
        </div>
        <div className="w-[30px] top-0 left-6 z-30">
          {/* <img src={Ellipse5} alt="" /> */}
        </div>
        </div>
        <div className='flex'>
          <BsStarFill className="block lg:hidden mt-1 mr-3" />
          <p  className='font-bold'>
              Recommend 4x
          </p>  
        </div>
      </div>
    </Link>
    </div>
  )
}

export default Avatar