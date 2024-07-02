import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar';

const AppLayout = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className='bg-slate-200 min-h-dvh w-full md:p-1'>
      {/* Header Section */}
      <section className={`bg-white md:my-2 md:mx-4 md:rounded-xl min-h-10 sticky top-0 md:top-4`}>
        <button onClick={ () => setOpenMenu((state) => !state) }>
          <FaBars />
        </button>
      </section>

      <section className='mt-4'>
        {/* Side Bar/Menu */}
        <aside className={`fixed w-80 md:left-0 ${openMenu ? 'left-0' : '-left-80' } h-dvh px-4 py-4 transition-all duration-500`}>
          <SideBar />
        </aside>

        {/* Main Content */}
        <aside className={`md:ml-80 px-4 py-4`}>
          <main>
            <Outlet />
          </main>
        </aside>
      </section>

    </div>
  )
}

export default AppLayout