import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa"
import { FaChevronRight } from 'react-icons/fa6'
import { PiUserSquareFill } from "react-icons/pi"
import { SiBookstack } from "react-icons/si"
import { getToken } from '../../helpers/auth'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [statistics, setStatistics] = useState(null)
  let navigator = useNavigate();
  let fetchStatistics = () => {
    axios.get(`http://localhost/school-mgt/api/dashboard/stats.php`, {
      headers: {
        'Authorization': 'Bearer ' + getToken()
      }
    })
    .then((response) => {
      setStatistics(response.data);
    })
    .catch((error) => {
      if (error.response?.status == 401) {
        navigator('/login')
      }
    })
  }

  useEffect(()=>{
    fetchStatistics();
  }, [])

  return (
    <> 
      {statistics && <div className="flex items-start gap-5 flex-col lg:flex-row">
          {/* Dashboard Statistics */}
          <section className='flex-grow'>
            {/* TOP GRID */}
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
              <aside className="min-h-32 rounded-xl py-2 px-3 bg-blue-300" > 
                <p className='text-slate-600'> Students </p>
                <div className='flex md:items-center flex-col md:flex-row items-start text-2xl font-bold mt-4 gap-2 '>
                  <FaUser/> <span>Over { statistics?.no_student }</span>
                </div>
                <p className='text-slate-700 font-light text-sm'> 7 Departmental faculties</p>
                <h3 className='text-slate-700 font-semibold text-xs mt-4 flex items-center gap-2'> <span>Check Records</span> <FaChevronRight /> </h3>
              </aside>
              <aside className="min-h-32 rounded-xl py-2 px-3 bg-yellow-200" > 
                <p className='text-slate-600'> Staffs </p>
                <div className='flex md:items-center flex-col md:flex-row items-start text-2xl font-bold mt-4 gap-2 '>
                  <PiUserSquareFill /> <span>{ statistics?.no_staff }</span>
                </div>
                <p className='text-slate-700 font-light text-sm'> 40 Staff Building</p>
                <h3 className='text-slate-700 font-semibold text-xs mt-4 flex items-center gap-2'> <span>Go To Employeees</span> <FaChevronRight /> </h3>
              </aside>
              <aside className="min-h-32 rounded-xl py-2 px-3 bg-purple-300" > 
                <p className='text-slate-600'> Courses </p>
                <div className='flex md:items-center flex-col md:flex-row items-start text-2xl font-bold mt-4 gap-2'>
                  <SiBookstack /> <span>Over { statistics?.no_courses } </span>
                </div>
                <p className='text-slate-700 font-light text-sm'> 120 lecture Buildings</p>
                <h3 className='text-slate-700 font-semibold text-xs mt-4 flex items-center gap-2'> <span>Check Syllables</span> <FaChevronRight /> </h3>
              </aside>
            </div>



          </section>

          {/* Right Side */}
          <section className='w-full lg:w-1/4 bg-lime-700'>
            <aside className="min-h-32 rounded-xl py-2 px-3 bg-slate-300" > 
              <p className='text-slate-600'> Departments </p>
              <div className='flex items-center text-2xl font-bold mt-4 gap-2'>
              <SiBookstack /> Over { statistics?.no_depts }
              </div>
              <p className='text-slate-700 font-light text-sm'> 120 lecture Buildings</p>
              <h3 className='text-slate-700 font-semibold text-xs mt-4 flex items-center gap-2'> <span>Check Syllables</span> <FaChevronRight /> </h3>
            </aside>
          </section>
      </div>}
    </>
  )
}

export default Dashboard