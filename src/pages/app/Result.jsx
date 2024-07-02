import React from 'react'
import { ImUsers } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";
import gradegraph from "../../assets/images/grade2.gif"
import { IoMdCheckmark } from "react-icons/io";
import { BsPen } from "react-icons/bs";
import { TbBooks } from "react-icons/tb";
import { PiDownloadThin } from "react-icons/pi";
import Button from "../../components/utils/Button"

const Result = () => {
  return (
    <>
      <section  className=' flex flex-col gap-4 '>
        <div className=' flex flex-col lg:flex-row gap-4  '>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Exam Result Part */}
              <div className='bg-white md:row-span-2 py-3 px-6 rounded-md w-full'>
                <div className='flex flex-row justify-between items-center '>
                    <aside className='flex flex-row gap-2'>
                      <span className='bg-orange-600 w-2 rounded-md'></span>
                      <h1 className='font-semibold'>Exam Result</h1>
                    </aside>
                    <aside className='flex flex-row gap-4'>
                      <div className='flex flex-row items-center gap-2 '>
                        <ImUsers />
                        <h1>Total Subject</h1>
                        <h1 className='text-blue-800 bg-blue-400 rounded-lg px-1'>12</h1>
                      </div>

                      {/* <button className='flex flex-row items-center bg-blue-400 rounded-md px-2 py-1 text-white'>
                        <FaPlus />
                        <h1> invite</h1>
                      </button> */}
                      <Button className='flex flex-row items-center bg-blue-400 rounded-md px-2 py-1 text-white' >
                          <FaPlus />
                        <h1> invite</h1>
                      </Button>
                    </aside>
                </div>
                    {/*exam result graph area */}
                <div className='bg-green-400 min-h-40 lg:min-h-52 my-2 w-full'>
                  
                  <img src={gradegraph} alt="" className='object-cover  ' />

                </div>

                <div className='lg:flex lg:flex-row justify-center gap-4 '>
                   <aside className='flex flex-row items-center gap-1'>
                      <span className='bg-orange-600 rounded-full w-2 h-2'></span>
                      <h1 className='text-xs'>5th Term Exam - June, 2022</h1>
                   </aside>
                   <aside className='flex flex-row items-center gap-1'>
                      <span className='bg-blue-600 rounded-full w-2 h-2'></span>
                      <h1 className='text-xs'>4th Term Exam - March, 2022</h1>
                   </aside>
                   <aside className='flex flex-row items-center gap-1'>
                      <span className='bg-green-600 rounded-full w-2 h-2'></span>
                      <h1 className='text-xs'>Pass Mark</h1>
                   </aside>
                </div>
              </div>
              {/* Top 3 Mark */}
              <aside className='bg-white  rounded-md h-[155px] lg:w-full'>
                <section className='mx-3 my-2 max-w-full '>
                    <div className='flex flex-row gap-4 border-b-2 border-gray-200 pb-3  '>
                        <span className='w-2 bg-purple-400 rounded-md'></span>
                        <h1 className='font-semibold'>Top 3 Marks</h1>
                    </div>
                    <div className='max-w-full'>
                        <aside className='flex justify-between py-1'>
                          <h1 className='text-xs'>Polymer Sc.</h1>
                          <h1 className='text-xs'>86/100</h1>
                        </aside>
                        <div className='max-w-full bg-gray-300 rounded-md h-2'>
                            <aside className='rounded-md h-2 bg-green-500 w-[140px] md:w-[150px] lg:w-[370px]'></aside>
                          
                        </div>
                    </div>
                    <div className='max-w-full'>
                        <aside className='flex justify-between py-1'>
                          <h1 className='text-xs'>Design Sc.</h1>
                          <h1 className='text-xs'>84/100</h1>
                        </aside>
                        <div className='max-w-full bg-gray-300 rounded-md h-2'>
                            <aside className='rounded-md h-2 bg-purple-500 w-[135px] md:w-[145px] lg:w-[340px]'></aside>
                          
                        </div>
                    </div>
                    <div className='max-w-full'>
                        <aside className='flex justify-between py-1'>
                          <h1 className='text-xs'>Solar Sc.</h1>
                          <h1 className='text-xs'>75/100</h1>
                        </aside>
                        <div className='max-w-full bg-gray-300 rounded-md h-2'>
                            <aside className='rounded-md h-2 bg-orange-500 w-[110px] md:w-[120px] lg:w-[290px]'></aside>
                          
                        </div>
                    </div>
                    
                    
                    
                </section>
              </aside>
              {/* Position In The Exam */}
              <aside className='bg-white flex rounded-md min-h-[155px] lg:w-full'>
                  <section className='mx-3 my-2 w-full '>
                    <div className='flex flex-row gap-4 border-b-2 border-gray-200 pb-3  '>
                          <span className='w-2 bg-orange-300 rounded-md'></span>
                          <h1 className='font-semibold'>Position In This Exam</h1>
                    </div>
                    <div className='flex flex-row w-full py-2'>
                        <aside className='bg-green-300 w-1 h-[90px] '>
                        </aside>
                        <aside className='mx-4'>
                          <h1 className='font-semibold'>Merit Position - 1st</h1>
                          <div className='w-full'>
                            <aside className='lg:flex lg:flex-row  text-xs gap-4 '>
                              <div className='flex flex-row items-center gap-1'>
                                <IoMdCheckmark />
                                <h1 className='whitespace-nowrap '>Theory - 347/500</h1>
                              </div>
                              <div className='flex flex-row items-center gap-1'>
                                <IoMdCheckmark />
                                <h1 className='whitespace-nowrap'>Practical - 450/500</h1>
                              </div>                          
                            </aside>
                            <aside className='w-42 border-2 flex flex-row gap-1 mt-2 lg:mt-4 px-1 py-1'>
                              
                                  <BsPen />
                                <h1 className='text-xs font-semibold  whitespace-nowrap'>Total Marks - 797/1000</h1>
                              
                            </aside>
                          </div>
                        </aside>
                    </div>
                    

                  </section>
              </aside>
            </div>
          </div>

          <div className='bg-white min-h-52 rounded-md '>
              {/* All Subject Marks */}
            <section className='w-100% lg:m-4 m-1'>
              <div className='flex flex-col items-start md:flex-row justify-between md:items-center whitespace-nowrap'>
                      <aside className='flex flex-row gap-2'>
                        <span className='bg-green-600 w-2 rounded-md'></span>
                        <h1 className='font-semibold'>All Subject Marks</h1>
                      </aside>
                      <aside className='flex flex-row gap-4'>
                        <div className='flex flex-row items-center gap-2 '>
                        <TbBooks />
                          <h1>Total Subject</h1>
                          <h1 className='text-blue-800 bg-blue-400 rounded-lg px-1'>10</h1>
                        </div>

                        {/* <div className='flex flex-row items-center bg-blue-400 rounded-md px-2 py-1 text-white'>
                        <PiDownloadThin />
                         <h1 className='hidden md:hidden lg:block'> Download Marksheet</h1>
                        </div> */}
                        <Button className='flex flex-row items-center bg-blue-400 rounded-md px-2 py-1 text-white'>
                          <PiDownloadThin />
                          <h1 className='hidden md:hidden lg:block'> Download Marksheet</h1>
                        </Button>
                      
                      </aside>
                  </div>

                  <div className='max-w-full overflow-x-auto px-3'> 
                    <table className='border-1 w-full mt-4 rounded-md text-left '>
                      <thead className=''>
                          <tr className='text-xs font-light text-gray-500'>
                              <th className='py-3 whitespace-nowrap'>SUBJECT NAME</th>
                              <th className='whitespace-nowrap'>THEORY</th>
                              <th className='whitespace-nowrap'>PRACTICAL</th>
                              <th className='whitespace-nowrap'>ASSIGNMENT</th>
                              <th className='whitespace-nowrap'>ATTENDANCE</th>
                              <th className='whitespace-nowrap'>TOTAL</th>
                            </tr>
                      </thead>
                      <tbody className='my-4'>
                        <tr className='text-xs   '>
                            <td className='py-3'>Polymer Sc.</td>
                            <td>30/40</td>
                            <td>38/40</td>
                            <td>8/10</td>
                            <td>73%</td>
                            <td><span className='bg-green-400 rounded-md py-1 px-2'>88/100</span></td>
                        </tr>
                        <tr className='text-xs   '>
                            <td className='py-3'>Solar Sc.</td>
                            <td>30/40</td>
                            <td>38/40</td>
                            <td>8/10</td>
                            <td>73%</td>
                            <td><span className='bg-purple-400 rounded-md py-1 px-2'>75/100</span></td>
                        </tr>
                        <tr className='text-xs   '>
                          <td className='py-3'>Urdan Dev.</td>
                          <td >30/40</td>
                          <td>38/40</td>
                          <td>8/10</td>
                          <td>73%</td>
                          <td><span className='bg-orange-400 rounded-md py-1 px-2'>64/100</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </section>
            </div>


              
      </section>
    
    </>
  )
}

export default Result