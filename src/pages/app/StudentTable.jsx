import Button from "../../components/utils/Button"
import PrimaryTextinput from './../../components/utils/PrimaryTextinput';
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import Modal from './../../components/utils/Modal';
// import { FaDeleteLeft, FaSchool } from "react-icons/fa6";
import { useState,useEffect } from "react";
import { FaEdit, FaPlug, FaPlus, FaRegRegistered, FaRegTimesCircle } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { MdDelete, MdDriveFileRenameOutline } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import SelectInput from "../../components/utils/SelectInput";
import { FcDepartment } from "react-icons/fc";
import axios from 'axios';
import { getToken } from '../../helpers/auth';
import { RiLockPasswordLine } from "react-icons/ri";


const StudentTable = () => {

  const [stdModalState, setStdModalState] = useState(false);
  const [stdUpdateModalState, setStdUpdateModalState] = useState(false);
  const [departments, setDepartments] = useState([{ id: '', name: 'Select Department' }])
  const [students, setStudents] = useState([])
  const [studentRec, setStudentRec] = useState(null);

  let fetchDeptData = () => {
      axios.get(`http://localhost/school-mgt/api/departments/fetch_data.php`, {
          headers: {
            'Authorization': 'Bearer ' + getToken()
          }
      })
      .then((response) => {            
        if (response.data.success) {
          // let dept = departments;
          // response.data.body.departments.forEach(department => {
          //   dept.push(department)
          // });
          setDepartments(response.data.body.departments)
        }
      })
      .catch((error) => {
          
      })
  }

  useEffect(() => {
      fetchDeptData()
  }, [])
  

  let createStd = (ev) => {
    ev.preventDefault();
    let data = new FormData(ev.target);
    axios.post(`http://localhost/school-mgt/api/students/save_Stud.php`, data, {
      headers: {
        'Authorization': 'Bearer ' + getToken()
      }
    })
      .then((response) => {
        if (response.data.success) {
          ev.target.reset();
          setStdModalState(false);
          fetchStdData();
          alert(response.data.message)
        }
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  };
  
    let deleteStd = (id) => {
      let data = new FormData();
      data.append('student_id', id);
      axios.post(`http://localhost/school-mgt/api/students/delete_Stud.php`, data, {
      headers: {
        'Authorization': 'Bearer ' + getToken(),
      }
    })
      .then((response) => {
        if (response.data.success) {
          alert(response.data.message)
          fetchStdData();
          
        }
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
   
  };
    let fetchStdData = () => {
        axios.get(`http://localhost/school-mgt/api/students/fetch_Stud.php`, {
            headers: {
              'Authorization': 'Bearer ' + getToken()
            }
        })
        .then((response) => {            
            if (response.data.success) {
              setStudents(response.data.body.students)
              console.log(response.data.body.students);
            }
        })
        .catch((error) => {
            
        })
    }
    useEffect(() => {
        fetchStdData()
    }, [])
  
  let updateStdData = (ev) => {
      ev.preventDefault();
      let data = new FormData(ev.target);
      axios.post(`http://localhost/school-mgt/api/students/edit_Stud.php`,data,{
            headers: {
              'Authorization': 'Bearer ' + getToken()
            }
      })
     .then((response) => {
        if (response.data.success) {
          setStdUpdateModalState(false);
          fetchStdData();
          alert(response.data.message)
        }
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  };
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
                      <option value="student " className="outline-none cursor-pointer text-black">SAVE</option>
                    </select>
                  </aside>
                  <aside className='flex flex-row gap-4'>
                    
                    <Button  onClick={()=> setStdModalState(true)} className=" text-white  rounded-md">CREATE STUDENT</Button>
                  </aside>
              </div>
              
              {/* Create Student Modal */}
              <section>
                <Modal show={stdModalState} maxWidth='sm'>
                      <div className=''>
                              <header className='flex justify-between items-center py-2 px-4'>
                                  <div>
                                      <h1 className='flex items-center gap-2'>
                                        <PiStudentBold /> Add Students
                                      </h1>
                                  </div>
                                  <div>
                                      <button onClick={()=>setStdModalState(false)}  className='bg-red-500 rounded-full text-white text-xl'>
                                          <FaRegTimesCircle />
                                      </button>
                                  </div>
                              </header>
                              <section className='py-2 px-4'>
                                  <form onSubmit={createStd} >
                                      <div className="mb-3">
                                          <PrimaryTextinput
                                              icon={<FaRegRegistered className="text-xl"/>}
                                              placeholder="Enter Reg No"
                                              type ="text"
                                              name="regNo"
                                              className='py-2'
                                              required
                                          />
                                      </div>
                                      
                                      <div className="mb-3">
                                          <PrimaryTextinput
                                              icon={<MdDriveFileRenameOutline className="text-xl"/>}
                                              placeholder="Enter First Name"
                                              type ="text"
                                              name="firstname"
                                              className='py-2'
                                              required
                                          />
                                      </div>
                                      
                                      <div className="mb-3">
                                          <PrimaryTextinput
                                              icon={<MdDriveFileRenameOutline className="text-xl"/>}
                                              placeholder="Enter Last Name"
                                              type ="text"
                                              name="lastname"
                                              className='py-2'
                                              required
                                          />
                                      </div>

                                      <div className="mb-3">
                                          <PrimaryTextinput
                                              icon={<MdAlternateEmail className="text-xl"/>}
                                              placeholder="Enter  Email"
                                              type ="email"
                                              name="email"
                                              className='py-2'
                                              required
                                          />
                                      </div>
                                      
                                      <div className="mb-3">
                                          <PrimaryTextinput
                                              icon={<RiLockPasswordLine className="text-xl"/>}
                                              placeholder="Enter  Password"
                                              type ="password"
                                              name="password"
                                              className='py-2'
                                              required
                                          />
                                      </div>
                                      
                                      {/* <div className="mb-3">
                                          <SelectInput
                                              icon={<FcDepartment className="text-xl"/>}
                                              options="Male: Female"
                                              name="dept_Id"
                                              className='py-2 w-full'
                                              required
                                          />
                                      </div> */}
                                      <div className="mb-3">
                                          <select id="" name="gender" className="inline-flex bg-slate-50 text-black cursor-pointer ring-0 outline-none items-center px-4 py-2  font-semibold text-xs uppercase tracking-widest  focus:outline-none focus:ring-2  focus:ring-offset-2 transition ease-in-out duration-150 rounded-md  w-full ">
                                            <option value="" className="outline-none text-black">Gender</option>
                                            <option value="Female" className="outline-none text-black">Female</option>
                                            <option value="Male" className="outline-none text-black">Male</option>
                                          </select>
                                      </div>

                                      <div className="mb-3">
                                          <SelectInput
                                              icon={<FcDepartment className="text-xl"/>}
                                              options={departments}
                                              name="dept_id"
                                              className='py-2 w-full border'
                                              // required
                                          />
                                      </div>
                                      

                                      <div className="pt-5  ">
                                      {/* <Button className=" hover:bg-blue-800 w-full border border-[#0000002f]"> Login</Button> */}
                                      <Button className="text-white h-11 w-full  justify-center outline-none rounded-md  flex items-center gap-2">
                                          <FaPlus/>  Add Student
                                      </Button>
                                      </div>
                                  </form>
                              </section>
                          </div>
                </Modal>
              </section>
        {/* Edit Student Modal */}
              <section>
                <Modal show={stdUpdateModalState} maxWidth='sm'>
                      <div className=''>
                              <header className='flex justify-between items-center py-2 px-4'>
                                  <div>
                                      <h1 className='flex items-center gap-2'>
                                        <FaEdit /> Edit Students Record
                                      </h1>
                                  </div>
                                  <div>
                                      <button onClick={()=>{ setStudentRec(null); setStdUpdateModalState(false)} }  className='bg-red-500 rounded-full text-white text-xl'>
                                          <FaRegTimesCircle />
                                      </button>
                                  </div>
                              </header>
                            {studentRec && <section className='py-2 px-4'>
                              <form onSubmit={updateStdData} >
                                <input type="hidden" name="student_id" value={studentRec.id} />
                                <div className="mb-3">
                                  <PrimaryTextinput
                                    icon={<FaRegRegistered className="text-xl" />}
                                    placeholder="Enter Reg No"
                                    type="text"
                                    name="regNo"
                                    defaultValue={studentRec.regno}
                                    className='py-2'
                                    required
                                  />
                                </div>
                                                    
                                <div className="mb-3">
                                  <PrimaryTextinput
                                    icon={<MdDriveFileRenameOutline className="text-xl" />}
                                    placeholder="Enter First Name"
                                    type="text"
                                    name="firstname"
                                    defaultValue={studentRec.firstname}
                                    className='py-2'
                                    required
                                  />
                                </div>
                                                    
                                <div className="mb-3">
                                  <PrimaryTextinput
                                    icon={<MdDriveFileRenameOutline className="text-xl" />}
                                    placeholder="Enter Last Name"
                                    type="text"
                                    name="lastname"
                                    defaultValue={studentRec.lastname}
                                    className='py-2'
                                    required
                                  />
                                </div>

                                <div className="mb-3">
                                  <PrimaryTextinput
                                    icon={<MdAlternateEmail className="text-xl" />}
                                    placeholder="Enter  Email"
                                    type="email"
                                    name="email"
                                    defaultValue={studentRec.email}
                                    className='py-2'
                                    required
                                  />
                                </div>
                                                    
                                {/* <div className="mb-3">
                                  <PrimaryTextinput
                                    icon={<RiLockPasswordLine className="text-xl" />}
                                    placeholder="Enter  Password"
                                    type="password"
                                    name="password"
                                    defaultValue={studentRec.password}
                                    className='py-2'
                                  required
                                  />
                                </div> */}
                                                    
                                {/* <div className="mb-3">
                                                        <SelectInput
                                                            icon={<FcDepartment className="text-xl"/>}
                                                            options="Male: Female"
                                                            name="dept_Id"
                                                            className='py-2 w-full'
                                                            required
                                                        />
                                                    </div> */}
                                <div className="mb-3">
                                  <select id="" defaultValue={studentRec.gender} name="gender" className="inline-flex bg-slate-50 text-black cursor-pointer ring-0 outline-none items-center px-4 py-2  font-semibold text-xs uppercase tracking-widest  focus:outline-none focus:ring-2  focus:ring-offset-2 transition ease-in-out duration-150 rounded-md  w-full ">
                                    <option value="" className="outline-none text-black">Gender</option>
                                    <option value="Female" className="outline-none text-black">Female</option>
                                    <option value="Male" className="outline-none text-black">Male</option>
                                  </select>
                                </div>

                                <div className="mb-3">
                                  <SelectInput
                                    icon={<FcDepartment className="text-xl" />}
                                    options={departments}
                                    name="dept_id"
                                    className='py-2 w-full border'
                                    defaultValue={studentRec.dept_id}
                      
                                  // required
                                  />
                                </div>
                                                    

                                <div className="pt-5  ">
                                  {/* <Button className=" hover:bg-blue-800 w-full border border-[#0000002f]"> Login</Button> */}
                                  <Button  className="text-white h-11 w-full  justify-center outline-none rounded-md  flex items-center gap-2">
                                    <FaPlus />  Update Student Record
                                  </Button>
                                </div>
                              </form>
                            </section>}
                          </div>
                </Modal>
              </section>
          
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
                        {/* <option value="department" className="outline-none text-black">{departments}</option> */}
                        <option value="" className="outline-none text-black">Select Department</option>
                        {departments && departments.map((department, index) => (
                          <option value={department.id} key={index} className="outline-none text-black">{department.name}</option>
                          ))}
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
                          <th className='py-3 whitespace-nowrap '>S/No</th>
                          <th className='py-3 whitespace-nowrap '>REG No</th>
                          <th className='whitespace-nowrap'>FIRST NAME</th>
                          <th className='whitespace-nowrap'>LAST NAME</th>
                          <th className='whitespace-nowrap'>GENDER</th>
                          <th className='whitespace-nowrap'>DEPARTMENT</th>
                        </tr>
                  </thead>
                  <tbody className='my-4'>
                    {students.length >0 && students.map((student, index)=>(
                        <tr className='text-xs' key={student.id}>
                        <td className='py-3 whitespace-nowrap'><Link to=''>{index +1}</Link> </td>
                          <td className='py-3 whitespace-nowrap'><Link to=''>{student.regno}</Link> </td>
                          <td><Link to=''>{student.firstname}</Link></td>
                          <td><Link to=''>{student.lastname}</Link></td>
                          <td>{student.gender}</td>
                          <td className="whitespace-nowrap">{student.department?.name }</td>
                          <td>
                          <button onClick={() => { setStudentRec(student); setStdUpdateModalState(true)} }  className="flex justify-center items-center gap-1 bg-yellow-300 rounded-md px-2 py-1 hover:text-white hover:bg-yellow-500 text-black">
                                Edit <FaEdit className="text-lg"/>
                            </button>
                          </td>
                          <td>
                              <button onClick={() => deleteStd(student.id)} className="flex justify-center items-center gap-1 bg-red-500 rounded-md px-2 py-1 hover:text-white hover:bg-red-600 text-black">
                                  Delete <MdDelete className="text-lg" />
                              </button>
                          </td>
                        </tr>
                    ))}                  
                  </tbody>
                </table>
              </div>
      </section> 
    </>
  )
}

export default StudentTable