import React from 'react';

type ContactProps = {
  toggleState: number;
  toggleTab: (index: number) => void;
};


const Contact = ({ toggleTab }: ContactProps) => {
    
  return (
      <div className="hidden lg:block w-full px-[5%] py-16 bg-black">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold">Have an upcoming project</h1>
          <div>
            <button onClick={() => toggleTab(1)}
            className="p-5 bg-[#f5f5f5] text-xl font-semibold text-black rounded-full mt-8 cursor-pointer hover:bg-black hover:text-[#f5f5f5] hover:border-[#f5f5f5] hover:border-solid hover:border-2">
              WORK WITH ME
            </button>
          </div>
        </div>
      </div>
  )
}

export default Contact
