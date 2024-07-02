import React from 'react'
import { FaUser } from "react-icons/fa"
import { PiUserSquareFill } from "react-icons/pi"
import { SiBookstack } from "react-icons/si"

const Dashboard = () => {
  return (
    <>
      {/* Dashboard Statistics */}
      <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <aside className="min-h-32 bg-white rounded-xl py-2 px-3 bg-blue-200" > 
          <p className='text-slate-600'> Students </p>
          <div className='flex items-center text-2xl font-bold mt-4 gap-2 '>
          <FaUser/> Over 2.5M
          </div>
          <p className='text-slate-700 font-light text-sm'> 7 Departmental faculties</p>
          <h3 className='text-slate-700 font-semibold text-xs mt-4'> Check Records > </h3>
        </aside>
        <aside className="min-h-32 bg-white rounded-xl py-2 px-3 bg-yellow-200" > 
          <p className='text-slate-600'> Staffs </p>
          <div className='flex items-center text-2xl font-bold mt-4 gap-2 '>
          <PiUserSquareFill /> 30
          </div>
          <p className='text-slate-700 font-light text-sm'> 40 Staff Building</p>
          <h3 className='text-slate-700 font-semibold text-xs mt-4'> Go To Employeees > </h3>
        </aside>
        <aside className="min-h-32 bg-white rounded-xl py-2 px-3 bg-purple-200" > 
          <p className='text-slate-600'> Courses </p>
          <div className='flex items-center text-2xl font-bold mt-4 gap-2'>
          <SiBookstack /> Over 300
          </div>
          <p className='text-slate-700 font-light text-sm'> 120 lecture Buildings</p>
          <h3 className='text-slate-700 font-semibold text-xs mt-4'> Check Syllables > </h3>
        </aside>
      </section>
    
    </>
  )
}

export default Dashboard