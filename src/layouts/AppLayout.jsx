import { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar';
// import PrimaryTextinput from '../components/utils/PrimaryTextinput';
import { Link } from 'react-router-dom';
import { GoSearch } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const AppLayout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showNav, setShowNav] = useState (false);

  return (
    <div className='bg-slate-200 min-h-dvh w-full md:p-1'>
      {/* Header Section */}
      <section className={`bg-white md:my-2 md:mx-4 md:rounded-xl min-h-10 sticky top-0 md:top-4 flex justify-between items-center px-4 shadow-2xl`}>
          <div className="flex justify-between  md:gap-6 item-center flex-grow md:flex-grow-0">
              {/* Logo */}
              <div className='flex items-center font-black text-2xl mr-2 md:mr-0'>
                <Link to="/">School<span className="text-primary">MGT</span></Link>   
              </div>

              {/* Search bar */}
              <div className="flex items-center bg-slate-50 rounded-md border mr-2">
                  <input type="text" placeholder="Search here...." className={`flex-grow bg-transparent py-1 px-2 outline-none text-sm w-28 md:w-full hidden md:block` } />
                  <button className='px-3 text-slate-500 font-semibold cursor-pointer'>
                    <GoSearch className="hover:text-black" />
                  </button>
              </div>
          </div>
          {/* top-10 */}
          {/* Nav Menu  */}
          <nav className={` fixed md:flex  gap-4 shadow-2xl md:shadow-none md:relative bg-white top-10 rounded-b-3xl md:bg-transparent flex-col md:flex-row    md:top-0 px-2 py-2 transition-all md:transition-none  duration-500 md:duration-0 md:right-0 ${showNav ? 'right-0' : '-right-56' }`}>
              <div className='flex items-center justify-center '>
                  <div className="border flex justify-center items-center h-9 px-2 rounded-md hover:bg-primary hover:text-blue-50 font-medium">
                    <button className="flex md:gap-4 gap-2 justify-center items-center whitespace-nowrap  text-sm"><BsTelephone /><span> (+237) 705 611 5632</span></button>
                  </div>
              </div>
              <div className="flex justify-center items-center  gap-4 md:flex-row flex-col py-2 md:py-0">
                  <div className="relative">
                        <IoChatboxOutline className="text-3xl cursor-pointer   hover:text-green-500 " />
                        <div className="bg-green-500 absolute -top-1 right-2 outline-none text-xs rounded-full w-2 h-3 flex justify-center items-center text-white cursor-pointer px-2 py-2">2</div>
                  </div>
                  <div className="relative">
                        <IoIosNotificationsOutline className="text-3xl cursor-pointer hover:text-red-500 " />
                        <div className="bg-red-500 absolute -top-1 right-2 outline-none text-xs rounded-full w-2 h-3 flex justify-center items-center text-white cursor-pointer px-2 py-2">5</div>
                  </div>
              </div>
                 {/* Profile */}
              <div className="border-l flex px-4 font-sans md:gap-4 gap-1 items-center justify-center flex-col-reverse md:flex-row mt-5 md:mt-0">
                  <Link to="#" className=" whitespace-nowrap ">
                      <p>Pro City</p>
                  </Link>
                  <Link to="#" className="bg-red-600 rounded-full p-1">
                      <FaUser className="text-2xl"/>
                  </Link>
              </div>
          </nav>

          <button className="bg-red-600 rounded-full p-1 md:hidden mr-2" onClick={ () => setShowNav((state) => !state) }>
            <FaUser className="text-2xl"/>
          </button>

          {/* nav Show on small screen */}
          <button className="md:hidden flex" onClick={ () => setOpenMenu((state) => !state) }>
             {openMenu ? <IoMdClose className='text-3xl cursor-pointer text-red-700 ' /> : <FaBars  className='text-2xl cursor-pointer' /> } 
          </button>
      </section>

      <section className='mt-4'>
        {/* Side Bar/Menu */}
        <aside className={`fixed top-10 md:top-auto w-80 md:left-0 ${openMenu ? 'left-0' : '-left-80' } h-dvh px-4 py-4 transition-all duration-500`}>
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