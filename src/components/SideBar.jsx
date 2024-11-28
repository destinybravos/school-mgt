import React from 'react'
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { IoMdBook } from "react-icons/io";
import { TiCalendarOutline } from "react-icons/ti";
import { CgMediaLive } from "react-icons/cg";
import { MdOutlineAssignment } from "react-icons/md";
import { FaPeopleGroup, FaUsers } from "react-icons/fa6";
import { PiExamLight } from "react-icons/pi";
import { PiCertificateFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { RiSchoolLine } from 'react-icons/ri';
import { GrUserWorker } from 'react-icons/gr';

const SideBar = () => {
  return (
    <div className='bg-white rounded-xl h-full'>
        <div className='mx-10 py-8'>
           <Link to="/dashboard" className='flex gap-10 items-center mb-3 hover:border-b-2 border-primary hover:pb-2 transition-all duration-200'>
            <div>
                <IoHomeOutline className='text-2xl' />
            </div>
            <div>
               <h1 className='text-lg font-medium'>
                  Dashboard
               </h1>
            </div>
           </Link>
            {/* second section */}
            <Link to="/students" className='flex gap-10 items-center mb-3 hover:border-b-2 border-primary hover:pb-2 transition-all duration-200'>
                <div>
                    <FaUsers className='text-2xl' />
                </div>
                <div>
                  <h1 className='text-lg font-medium'>
                      Students
                  </h1>
                </div>
           </Link>
            <Link to="/staff" className='flex gap-10 items-center mb-3 hover:border-b-2 border-primary hover:pb-2 transition-all duration-200'>
                <div>
                    <GrUserWorker className='text-2xl' />
                </div>
                <div>
                  <h1 className='text-lg font-medium'>
                      Staff
                  </h1>
                </div>
           </Link>
           {/* GrUserWorker  */}
           {/* Third section */}
           <Link to="/department" className='flex gap-10 items-center mb-3 hover:border-b-2 border-primary hover:pb-2 transition-all duration-200'>
                <div>
                    <RiSchoolLine className='text-2xl' />
                </div>
                <div>
                  <h1 className='text-lg font-medium'>
                      Departments
                  </h1>
                </div>
           </Link>
           {/* Fourth section */}
           <Link to="" className='flex gap-10 items-center mb-3 hover:border-b-2 border-primary hover:pb-2 transition-all duration-200'>
                <div>
                    <CgMediaLive className='text-2xl' />
                </div>
                <div>
                  <h1 className='text-lg font-medium'>
                      Live Class
                  </h1>
                </div>
           </Link>
            {/* Fifty section */}
            <Link to="" className='flex gap-10 items-center mb-3 hover:border-b-2 border-primary hover:pb-2 transition-all duration-200'>
                <div>
                    <MdOutlineAssignment className='text-2xl' />
                </div>
                <div>
                  <h1 className='text-lg font-medium'>
                      Assignment
                  </h1>
                </div>
           </Link>
            {/* sixt section */}
            <Link to="" className='flex gap-10 items-center mb-3 hover:border-b-2 border-primary hover:pb-2 transition-all duration-200'>
                <div>
                    <FaPeopleGroup className='text-2xl' />
                </div>
                <div>
                  <h1 className='text-lg font-medium'>
                      Classmates
                  </h1>
                </div>
           </Link>
           {/* seventh section */}
           <Link to="" className='flex gap-10 items-center mb-3 hover:border-b-2 border-primary hover:pb-2 transition-all duration-200'>
                <div>
                    <PiExamLight className='text-2xl' />
                </div>
                <div>
                  <h1 className='text-lg font-medium'>
                      Exams
                  </h1>
                </div>
           </Link>

           {/* 8th */}
           <Link to="" className='flex gap-10 items-center mb-3 hover:border-b-2 border-primary hover:pb-2 transition-all duration-200'>
                <div>
                    <PiExamLight className='text-2xl' />
                </div>
                <div>
                  <h1 className='text-lg font-medium'>
                      Result
                  </h1>
                </div>
           </Link>
            {/* eight section */}
            <Link to="" className='flex gap-10 items-center mb-3 hover:border-b-2 border-primary hover:pb-2 transition-all duration-200'>
                <div>
                    <PiCertificateFill className='text-2xl' />
                </div>
                <div>
                  <h1 className='text-lg font-medium'>
                    My Certificate
                  </h1>
                </div>
           </Link>
           {/* 9th section */}
           <Link to="" className='flex gap-10 items-center mb-3 hover:border-b-2 border-primary hover:pb-2 transition-all duration-200'>
                <div>
                    <IoSettingsOutline className='text-2xl' />
                </div>
                <div>
                  <h1 className='text-lg font-medium'>
                      Settings
                  </h1>
                </div>
           </Link>
        </div> 
    </div>
  )
}

export default SideBar