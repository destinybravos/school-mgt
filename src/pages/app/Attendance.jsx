import React from 'react'
import { GiArchiveRegister } from "react-icons/gi";
import profilepicture from "../../assets/images/banner_img2.jpg"
import PrimaryTextinput  from "../../components/utils/PrimaryTextinput"
import Button from "../../components/utils/Button"
import { LuUserPlus } from "react-icons/lu";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaSquareXmark } from "react-icons/fa6";

const Attendance = () => {
  return (
    <div className=' h-dvh rounded-md w-ful '>
        <section className='rounded-md p-4  h-full grid  gap-4 '>
            <div className=' grid lg:grid-cols-2 gap-4 max-w-full '>
                <aside className=' rounded-md bg-white'>
                    <div className=' mx-3 my-3 h-10'>
                        <aside className='items-center justify-center flex gap-4 text-2xl font-bold lg:text-3xl py-4'> 
                            <h1 className='font-mono text-blue-600' >ATTENDANCE REGISTER </h1> 
                            <GiArchiveRegister /> 
                        </aside>
                    </div>
                    <div  className='mx-3 font-semibold '>
                        <h1 className=' py-6 '>
                        Attendance is a key factor in academic success. According to the National Center for Educational Statistics, students with average attendance are twice as likely to pass their classes as those who miss school.
                        </h1>
                        <h1 className='py-6'>
                        Overall, student attendance at every stage of school is vital because it helps students stay engaged, build relationships, develop important skills, and set a strong foundation for their future.
                        </h1>
                    </div>
                </aside>
                {/* entry part */}
                <aside className=' rounded-md bg-white w-full'>
                    <section className='  mx-3 my-3'>
                        <h1 className='text-center font-bold text-blue-600 text-2xl py-2'>ADDING TO THE LIST</h1>
                        <div className=' py-4 '>
                           <form action="" className=''>
                              <div className='lg:flex justify-between items-center  mx-4 py-2 '> 
                                <h1 className='font-semibold whitespace-nowrap mx-1 py-2'>Course Name</h1>
                                <PrimaryTextinput  placeholder="Enter Course Name"type ="" required  className='w-full'/>
                              </div>
                              <div className='lg:flex justify-between items-center  mx-4 py-2 '> 
                                <h1 className='font-semibold whitespace-nowrap mx-1 py-2'>Course Id</h1>
                                <PrimaryTextinput  placeholder="Enter Id"type ="" required  className='w-full'/>
                              </div>
                              <div className='lg:flex justify-between items-center  mx-4 py-2 '> 
                                <h1 className='font-semibold whitespace-nowrap mx-1 py-2'>Department</h1>
                                <PrimaryTextinput  placeholder="Enter Department"type ="" required  className='w-full'/>
                              </div>
                              <div className='lg:flex justify-between items-center  mx-4 py-2 '> 
                                <h1 className='font-semibold whitespace-nowrap mx-1 py-2'>Faculty Name</h1>
                                <PrimaryTextinput  placeholder="Enter Faculty Name"type ="" required  className='w-full'/>
                              </div>  
                              <div className='lg:flex justify-between items-center  mx-4 py-2 '> 
                                 <PrimaryTextinput  placeholder=" " type ="date" required  className='w-full'/>
                              </div>  
                              
                              <div className='item  mx-4'>
                                <Button className='flex flex-row gap-2 items-center bg-blue-400 rounded-md px-2 py-1 text-white' >
                                 <LuUserPlus />
                                <h1> ADD</h1>
                                </Button>
                               </div>
                              
                            </form>
                            
                        </div>
                        
                    </section>
                </aside>
            </div>
            {/* attendance register table */}
            <div className='bg-white rounded-md'>
                 <aside className=' h-full  lg:w-full   overflow-x-auto px-3'>
                    <h1 className='font-mono text-blue-600  text-2xl text-center font-bold' >GENERAL LIST FOR ATTENDED STUDENTS
                    </h1>
                    <table className='border-1 w-full mt-4 rounded-md text-left '>
                        <thead className=''>
                            <tr className='text-xs font-light text-gray-500'>
                                <th className='py-3 whitespace-nowrap'>Course Id</th>
                                <th className='whitespace-nowrap'>Student Name</th>
                                <th className='whitespace-nowrap'>class level</th>
                                <th className='whitespace-nowrap'>Date</th>
                                <th className='whitespace-nowrap'>Present</th>
                                <th className='whitespace-nowrap'>Absent</th>
                            </tr>
                        </thead>
                        <tbody className='my-4'>
                            <tr className='text-xs   '>
                                <td className='py-3'>COM101</td>
                                <td className='whitespace-nowrap'>Josiah mmanuel</td>
                                <td>Graduate</td>
                                <td>8/10</td>
                                <td><IoMdCheckmarkCircle className='text-green-700 ' /></td>
                                <td><FaSquareXmark  className='text-red-700'/></td>
                            </tr>
                            <tr className='text-xs   '>
                                <td className='py-3'>COM101</td>
                                <td>Udeme John</td>
                                <td>Graduate</td>
                                <td>8/10</td>
                                <td><IoMdCheckmarkCircle className='text-green-700' /></td>
                                <td><FaSquareXmark  className='text-red-700'/></td>
                            </tr>
                            <tr className='text-xs   '>
                                <td className='py-3'>COM101</td>
                                <td>happiness</td>
                                <td>Graduate</td>
                                <td>8/10</td>
                                <td><IoMdCheckmarkCircle className='text-green-700' /></td>
                                <td><FaSquareXmark  className='text-red-700'/></td>
                            </tr>
                        </tbody>
                        
                    </table>
                </aside>
            </div>
            
        </section> 
    </div>
  )
}

export default Attendance