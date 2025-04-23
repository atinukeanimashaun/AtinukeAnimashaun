import { skillsItems, SocialMedia, toolsItems } from '@/constants'
import React from 'react'
import { CiCalendarDate } from 'react-icons/ci'

type RequestProps = {
  page: "service1" | "service2";
  toggleTab: (index: number) => void;
  toggleState: number;
};

const Request = ({ page, toggleTab }: RequestProps) => {
  return (
    <>
      {page === "service1" && (
        <div className="border-[1px] border-[#fffafa] rounded-xl py-8 px-4 w-full h-[40%] lg:block hidden ">
          <div className="text-center m-5">
            <p className="text-xl capitalize">
              contact for pricing
            </p>

            <button onClick={() => toggleTab(1)}
            className="uppercase font-bold my-5 py-3 px-16 lg:px-5 border bg-[#fffafa] text-black rounded-full hover:bg-black hover:text-[#fffafa]">
              request to book
            </button>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-xl capitalize mb-4">
              skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {
                skillsItems.map((item, i) => (
                  <div key={i}>
                    <p className="border border-gray-400 rounded-full py-2 px-3 text-center text-[12px]">
                      {item.name}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-xl capitalize mb-4">
              Tools
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {
                toolsItems.slice(0, 5).map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-center items-center border border-gray-400 rounded-full py-2 text-[12px]">
                      <p className='mr-2'>{item.icon}</p>
                      {item.name}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-xl capitalize mb-4">
              Links
            </h3>
            <div className='flex gap-6'>
              {
                SocialMedia.map((item, i) => (
                  <div key={i}>
                    <a className='text-3xl' href="{item.link}">{item.icon}</a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      )}

      {page === "service2" && (
        <div className="border-[1px] border-[#fffafa] rounded-xl py-8 px-4 w-full h-[40%] lg:block hidden ">
          <div className="text-center m-5">
            <p className="text-xl capitalize">
              contact for pricing
            </p>

            <button onClick={() => toggleTab(1)}
            className="uppercase font-bold my-5 py-3 px-16 lg:px-5 border bg-[#fffafa] text-black rounded-full hover:bg-black hover:text-[#fffafa]">
              request to book
            </button>
          </div>

          <div className="mb-8">
            <div className='my-6'>
              <h3 className="font-bold text-[20px] capitalize mb-2">
                Service details
              </h3>

              <div className='flex space-x-2 px-1'>
                <CiCalendarDate className='mt-1' />
                <p className="text-[16px]">
                  3+ weeks
                </p>
              </div>
            </div>

            <h3 className="font-bold text-xl capitalize mb-4">
              skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {
                skillsItems.slice(0, 2).map((item, i) => (
                  <div key={i}>
                    <p className="border border-gray-400 rounded-full py-2 px-3 text-center text-[12px]">
                      {item.name}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-xl capitalize mb-4">
              Tools
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {
                toolsItems.filter(item => item.id === "1" || (Number(item.id) >= 6 && Number(item.id) <= 13))
                .map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-center items-center border border-gray-400 rounded-full py-2 text-[12px]">
                      <p className='mr-2'>{item.icon}</p>
                      {item.name}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold text-xl capitalize mb-4">
              Links
            </h3>
            <div className='flex gap-6'>
              {
                SocialMedia.map((item, i) => (
                  <div key={i}>
                    <a className='text-3xl' href="{item.link}">{item.icon}</a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Request