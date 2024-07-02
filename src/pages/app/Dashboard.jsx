import React from 'react'
import { FaUser } from "react-icons/fa"
import { FaChevronRight } from 'react-icons/fa6'
import { PiUserSquareFill } from "react-icons/pi"
import { SiBookstack } from "react-icons/si"

const Dashboard = () => {
  return (
    <> 
      <div className="flex items-start gap-5">
          {/* Dashboard Statistics */}
          <section className='flex-grow'>
            {/* TOP GRID */}
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              <aside className="min-h-32 rounded-xl py-2 px-3 bg-blue-300" > 
                <p className='text-slate-600'> Students </p>
                <div className='flex items-center text-2xl font-bold mt-4 gap-2 '>
                <FaUser/> Over 2.5M
                </div>
                <p className='text-slate-700 font-light text-sm'> 7 Departmental faculties</p>
                <h3 className='text-slate-700 font-semibold text-xs mt-4 flex items-center gap-2'> <span>Check Records</span> <FaChevronRight /> </h3>
              </aside>
              <aside className="min-h-32 rounded-xl py-2 px-3 bg-yellow-200" > 
                <p className='text-slate-600'> Staffs </p>
                <div className='flex items-center text-2xl font-bold mt-4 gap-2 '>
                <PiUserSquareFill /> 30
                </div>
                <p className='text-slate-700 font-light text-sm'> 40 Staff Building</p>
                <h3 className='text-slate-700 font-semibold text-xs mt-4 flex items-center gap-2'> <span>Go To Employeees</span> <FaChevronRight /> </h3>
              </aside>
              <aside className="min-h-32 rounded-xl py-2 px-3 bg-purple-300" > 
                <p className='text-slate-600'> Courses </p>
                <div className='flex items-center text-2xl font-bold mt-4 gap-2'>
                <SiBookstack /> Over 300
                </div>
                <p className='text-slate-700 font-light text-sm'> 120 lecture Buildings</p>
                <h3 className='text-slate-700 font-semibold text-xs mt-4 flex items-center gap-2'> <span>Check Syllables</span> <FaChevronRight /> </h3>
              </aside>
            </div>



          </section>

          {/* Right Side */}
          <section className='w-1/4 bg-lime-700'>
            <aside className="min-h-32 rounded-xl py-2 px-3 bg-slate-300" > 
              <p className='text-slate-600'> Courses </p>
              <div className='flex items-center text-2xl font-bold mt-4 gap-2'>
              <SiBookstack /> Over 300
              </div>
              <p className='text-slate-700 font-light text-sm'> 120 lecture Buildings</p>
              <h3 className='text-slate-700 font-semibold text-xs mt-4 flex items-center gap-2'> <span>Check Syllables</span> <FaChevronRight /> </h3>
            </aside>
          </section>
      </div>
    </>
  )
}

export default Dashboard