// import React from 'react';
import { Outlet } from 'react-router-dom';
import { PiBookOpenTextThin } from "react-icons/pi"
import { PiArrowFatRightFill } from "react-icons/pi";
import StudentImage from "../assets/images/st3.png"

import { Link } from'react-router-dom';

const AuthLayout = () => {
  return (
    <div className='flex justify-between'>
      <aside className='bg-primary min-h-dvh flex-grow w-1/2 hidden md:block  '>
          <div className="text-4xl text-white flex justify-center pt-3 pb-3 mt-14 ">
            <div className="py-2 px-2 rounded-full border border-white">
              <Link to="/" className="" > <PiBookOpenTextThin /></Link>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col  '>
              <h1 className='text-2xl md:text-4xl font-black text-white '>Welcome Home</h1>
              <h6 className='text-sm text-white'>Manage your data here as Our Student</h6>
              <div className='flex items-center'>
                <div className=''>
                    <img src={StudentImage} alt="" className=' h-[450px]' />
                </div>
                <div className='absolute left-[580px]'>
                    <PiArrowFatRightFill   className='text-[100px] cursor-pointer text-white hover:-rotate-45 hover:text-secondary  duration-1000'/>
                </div>
              </div>   
          </div>
      </aside>
      <aside className='px-4 min-h-dvh flex-grow flex-shrink-0 w-1/2 flex justify-center items-center' >
        <div className='w-full max-w-sm'>
          <Outlet />
        </div>
      </aside>
    </div>
  )
}

export default AuthLayout