import Button from "../../components/utils/Button"
import PrimaryTextinput from './../../components/utils/PrimaryTextinput';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const StudentTable = () => {
  return (
    <>
        <section className='w-100%  m-1 '>
              <div className='flex  items-start md:flex-row bg-[#f8f8f8] p-4 rounded-md  md:justify-end  justify-center md:items-center gap-4 whitespace-nowrap  '>
                  <aside className='flex flex-row gap-2 shadow-2xl '>
                    <Button className="outline-none text-black  hover:text-white hover:bg-primary bg-slate-200 rounded-md ">PRINT</Button>
                  </aside>
                  <aside className='flex flex-row gap-4'>
                    <select id="" name="" className="inline-flex text-black outline-none items-center px-4 py-2 cursor-pointer font-semibold text-xs uppercase tracking-widest  focus:outline-none focus:ring-2  focus:ring-offset-2 transition ease-in-out duration-150 active:text-black rounded-md bg-slate-200 hover:bg-slate-200 ">
                      <option value="student " className="outline-none cursor-pointer text-black">EXPORT</option>
                      <option value="student " className="outline-none cursor-pointer text-black">IMPORT</option>
                      <option value="student " className="outline-none cursor-pointer text-black">PRINT</option>
                      <option value="student " className="outline-none cursor-pointer text-black">SAFE</option>
                    </select>
                  </aside>
                  <aside className='flex flex-row gap-4'>
                    <Button className=" text-white  rounded-md">CREATE STUDENT</Button>
                  </aside>
              </div>
          
              <div className='grid md:grid-cols-5 grid-cols-1 gap-4 md:gap-20 w-full items-center justify-center  md:items-center  bg-[#f8f8f8] p-4 rounded-md    mt-2'>
                  <div className="md:col-span-2 col-span-2  md:w-full">
                    <PrimaryTextinput
                      icon={<CiSearch className="text-lg hover:text-primary " />} 
                      placeholder="Search here...." 
                      type="text" 
                      className="h-96 w-72"
                    />
                  </div>
                  <div className="md:w-full">
                      <select id="" name="" className="inline-flex text-black cursor-pointer outline-none items-center px-4 py-2  font-semibold text-xs uppercase tracking-widest  focus:outline-none focus:ring-2  focus:ring-offset-2 transition ease-in-out duration-150 active:text-black rounded-md bg-slate-200 ">
                        <option value=" " className="outline-none text-black">Gender</option>
                        <option value="gender " className="outline-none text-black">Male</option>
                        <option value="gender " className="outline-none text-black">Female</option>
                      </select>
                  </div>
                  <div className="md:w-full">
                      <select id="" name="" className="inline-flex text-black outline-none items-center cursor-pointer px-4 py-2  font-semibold text-xs uppercase tracking-widest  focus:outline-none focus:ring-2  focus:ring-offset-2 transition ease-in-out duration-150 active:text-black rounded-md bg-slate-200 w-44  ">
                        <option value=" " className="outline-none text-black">Department</option>
                        <option value="department " className="outline-none text-black">Computing Science</option>
                        <option value="department " className="outline-none text-black">Electrical Engineeriing </option>
                        <option value="department " className="outline-none text-black">Mechanical Engineering</option>
                        <option value="department " className="outline-none text-black">Civil Engineering</option>
                        <option value="department " className="outline-none text-black">Chemical Engineering</option>
                        <option value="department " className="outline-none text-black">Electronics Engineering</option>  
                        <option value="department " className="outline-none text-black">Computer Engineering</option>
                        <option value="department " className="outline-none text-black">Information Technology</option>
                        <option value="department " className="outline-none text-black">Mechatronics Engineering</option>
                        <option value="department " className="outline-none text-black">Chemistry</option>
                        <option value="department " className="outline-none text-black">Physics</option>
                        <option value="department " className="outline-none text-black">Mathematics</option>
                      </select>
                  </div>
                  <div className="md:w-full">
                      <select id="" name="" className="inline-flex text-black outline-none items-center cursor-pointer px-4 py-2  font-semibold text-xs uppercase tracking-widest  focus:outline-none focus:ring-2  focus:ring-offset-2 transition ease-in-out duration-150 active:text-black rounded-md bg-slate-200  ">
                        <option value=" " className="outline-none text-black">Age Range</option>
                        <option value="ageRange " className="outline-none text-black">18 to 24</option>
                        <option value="ageRange " className="outline-none text-black">25 to 30</option>
                        <option value="ageRange " className="outline-none text-black">34 to 35</option>
                      </select>
                  </div>
                  
              </div>
              
              <div className='flex  items-start md:flex-row bg-[#f8f8f8] p-4 rounded-md  md:justify-start  justify-center md:items-center gap-6 whitespace-nowrap my-2 '>
                  <Link to="" className='flex flex-row gap-1 shadow-2xl justify-center items-center border-b-2 border-primary pb-[2px] '>
                    <h1 className="text-black font-bold text-sm">ALL </h1><h6 className="font-light text-[10px] bg-slate-200 p-[2px] text-primary">43</h6>
                  </Link>
                   <Link to="" className='flex flex-row gap-1 shadow-2xl justify-center items-center hover:border-b-2 hover:border-primary pb-[2px] '>
                    <h1 className="text-slate-500 font-bold hover:text-black text-sm">PRESENT </h1><h6 className="font-light text-[10px] bg-slate-200 p-[2px] hover:text-primary">43</h6>
                  </Link>
                   <Link to="" className='flex flex-row gap-1 shadow-2xl justify-center items-center hover:border-b-2 hover:border-primary pb-[2px] '>
                    <h1 className="text-slate-500 font-bold hover:text-black text-sm">ALUMINI </h1><h6 className="font-light text-[10px] bg-slate-200 p-[2px] hover:text-primary">43</h6>
                  </Link>
              </div>
              
              
              
              <div className='max-w-full overflow-x-auto px-3 bg-[#f1f1f1]  '> 
                <table className=' w-full  mt-4 rounded-md text-left '>
                  <thead className=' '>
                      <tr className='text-xs font-light  px-11 '>
                          <th className='py-3 whitespace-nowrap '>REG No</th>
                          <th className='whitespace-nowrap'>FIRST NAME</th>
                          <th className='whitespace-nowrap'>LAST NAME</th>
                          <th className='whitespace-nowrap'>GENDER</th>
                          <th className='whitespace-nowrap'>DEPARTMENT</th>
                        </tr>
                  </thead>
                  
                  
                  <tbody className='my-4'>
                    <tr className='text-xs   '>
                        <td className='py-3 whitespace-nowrap'><Link to=''>19H/0019/CS</Link> </td>
                        <td><Link to=''>Udeme</Link></td>
                        <td><Link to=''>John</Link></td>
                        <td>Male</td>
                        <td className="whitespace-nowrap">Computer Science</td>
                    </tr>
                    
                    <tr className='text-xs   '>
                        <td className='py-3 whitespace-nowrap'><Link to=''>19H/0050/CS</Link> </td>
                        <td><Link to=''>Emmanuel</Link></td>
                        <td><Link to=''>Josiah</Link></td>
                        <td>Male</td>
                        <td className="whitespace-nowrap">Computer Science</td>
                    </tr>
                    
                    <tr className='text-xs   '>
                        <td className='py-3 whitespace-nowrap'><Link to=''>22H/0210/ME</Link> </td>
                        <td><Link to=''>Emmanuel</Link></td>
                        <td><Link to=''>Dike</Link></td>
                        <td>Male</td>
                        <td className="whitespace-nowrap">Mechanical Engineering</td>
                    </tr>
              
                    <tr className='text-xs   '>
                        <td className='py-3 whitespace-nowrap'><Link to=''>23H/0150/CS</Link> </td>
                        <td><Link to=''>Muna</Link></td>
                        <td><Link to=''>Goodness</Link></td>
                        <td>Female</td>
                        <td className="whitespace-nowrap">Computer Science</td>
                    </tr>
                    
                    <tr className='text-xs   '>
                        <td className='py-3 whitespace-nowrap'><Link to=''>20H/070/CS</Link> </td>
                        <td><Link to=''>Obinna</Link></td>
                        <td><Link to=''>Martins</Link></td>
                        <td>Male</td>
                        <td className="whitespace-nowrap">Computer Science</td>
                    </tr>
                    
                    <tr className='text-xs   '>
                        <td className='py-3 whitespace-nowrap'><Link to=''>23H/030/CS</Link> </td>
                        <td><Link to=''>Happiness</Link></td>
                        <td><Link to=''>Tochi</Link></td>
                        <td>Female</td>
                        <td className="whitespace-nowrap">Computer Science</td>
                    </tr>
                    
                    <tr className='text-xs   '>
                        <td className='py-3 whitespace-nowrap'><Link to=''>25H/0230/CS</Link> </td>
                        <td><Link to=''>Francis</Link></td>
                        <td><Link to=''>Ugonna</Link></td>
                        <td>Male</td>
                        <td className="whitespace-nowrap">Computer Science</td>
                    </tr>
                    
                    <tr className='text-xs   '>
                        <td className='py-3 whitespace-nowrap'><Link to=''>19/0251/CS</Link> </td>
                        <td><Link to=''>James</Link></td>
                        <td><Link to=''>Ike</Link></td>
                        <td>Male</td>
                        <td className="whitespace-nowrap">Computer Science</td>
                    </tr>
                    
                     <tr className='text-xs   '>
                        <td className='py-3 whitespace-nowrap'><Link to=''>20/0290/CS</Link> </td>
                        <td><Link to=''>Blessing</Link></td>
                        <td><Link to=''>Mbembe</Link></td>
                        <td>Female</td>
                        <td className="whitespace-nowrap">Computer Science</td>
                    </tr>
                     <tr className='text-xs   '>
                        <td className='py-3 whitespace-nowrap'><Link to=''>20/0290/CS</Link> </td>
                        <td><Link to=''>Blessing</Link></td>
                        <td><Link to=''>Mbembe</Link></td>
                        <td>Female</td>
                        <td className="whitespace-nowrap">Computer Science</td>
                    </tr>
                     <tr className='text-xs   '>
                        <td className='py-3 whitespace-nowrap'><Link to=''>20/0290/CS</Link> </td>
                        <td><Link to=''>Blessing</Link></td>
                        <td><Link to=''>Mbembe</Link></td>
                        <td>Female</td>
                        <td className="whitespace-nowrap">Computer Science</td>
                    </tr>
                     <tr className='text-xs   '>
                        <td className='py-3 whitespace-nowrap'><Link to=''>20/0290/CS</Link> </td>
                        <td><Link to=''>Blessing</Link></td>
                        <td><Link to=''>Mbembe</Link></td>
                        <td>Female</td>
                        <td className="whitespace-nowrap">Computer Science</td>
                    </tr>
                  </tbody>
                </table>
              </div>
      </section> 
    </>
  )
}

export default StudentTable