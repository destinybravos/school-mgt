import React, { useEffect, useState } from 'react'
import Button from '../../components/utils/Button'
import Modal from '../../components/utils/Modal'
import { FaRegTimesCircle } from 'react-icons/fa'
import { FaPlus, FaSchool } from 'react-icons/fa6'
import PrimaryTextinput from '../../components/utils/PrimaryTextinput'
import SelectInput from '../../components/utils/SelectInput'
import TextArea from '../../components/utils/TextArea'
import axios from 'axios'
import { getToken } from '../../helpers/auth'
import { Link } from 'react-router-dom'

const Departments = () => {
    const [deptModalState, setDeptModalState] = useState(false)
    const [schModalState, setSchModalState] = useState(false)
    const [departments, setDepartments] = useState([])
    const [schools, setSchools] = useState([])

    let fetchDeptData = () => {
        axios.get(`http://localhost/school-mgt/api/departments/fetch_data.php`, {
            headers: {
              'Authorization': 'Bearer ' + getToken()
            }
        })
        .then((response) => {            
            if (response.data.success) {
                setDepartments(response.data.body.departments)
                setSchools(response.data.body.schools)
            }
        })
        .catch((error) => {
            
        })
    }

    useEffect(() => {
        fetchDeptData()
    }, [])

    let saveSchool = (ev) => {
        ev.preventDefault();
        let data = new FormData(ev.target);
        axios.post(`http://localhost/school-mgt/api/departments/save_school.php`, data, {
            headers: {
              'Authorization': 'Bearer ' + getToken()
            }
        })
        .then((response) => {
            if (response.data.success) {
                ev.target.reset();
                setSchModalState(false);
                fetchDeptData();
            }
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    }

    let saveDepartment = (ev) => {
        ev.preventDefault();
        let data = new FormData(ev.target);
        axios.post(`http://localhost/school-mgt/api/departments/save_department.php`, data, {
            headers: {
              'Authorization': 'Bearer ' + getToken()
            }
        })
        .then((response) => {
            if (response.data.success) {
                ev.target.reset();
                setDeptModalState(false);
                fetchDeptData();
                alert(response.data.message)
            }
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
    }


    return (
        <div>
            {/* Section for the create button */}
            <section>
                <div className='flex  items-start md:flex-row bg-[#f8f8f8] p-4 rounded-md  md:justify-end  justify-center md:items-center gap-4 whitespace-nowrap  '>
                    <aside className='flex flex-row gap-4'>
                        {/* <Button onClick={() => setModalState(true)} className="text-white  rounded-md"></Button> */}
                        <button onClick={() => setDeptModalState(true)} className='text-white  rounded-md inline-flex outline-none items-center px-4 py-2 bg-primary font-semibold text-xs uppercase tracking-widest hover:bg-slate-700 active:bg-slate-900 active:text-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'>
                            CREATE DEPARTMENT
                        </button>
                        <button onClick={() => setSchModalState(true)} className='rounded-md inline-flex outline-none items-center px-4 py-2 bg-secondary border-2 border-primary text-primary font-semibold text-xs uppercase tracking-widest hover:bg-slate-700 active:bg-slate-900 active:text-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'>
                            CREATE SCHOOL
                        </button>
                    </aside>
                </div>
            </section>

            {/* Search Tab/Pane */}


            {/* Department Tables */}
            <div className='max-w-full overflow-x-auto px-3 '> 
                <table className='w-full  mt-4 rounded-md text-left '>
                    <thead className=' '>
                        <tr className='text-xs font-light  px-11 '>
                            <th className='py-3 whitespace-nowrap '>SN</th>
                            <th className='whitespace-nowrap'>DEPARTMENT</th>
                            <th className='whitespace-nowrap'>SCHOOL</th>
                        </tr>
                    </thead>

                    <tbody>
                        {departments.length > 0 && departments.map((department, index) => (
                            <tr className='text-sm' key={department.id}>
                                <td className='py-3 whitespace-nowrap'> {index + 1} </td>
                                <td>{ department.name }</td>
                                <td className="whitespace-nowrap">{ department.school?.name }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add Department Modal */}
            <section>
                <Modal show={deptModalState} maxWidth='sm'>
                    <div className=''>
                        <header className='flex justify-between items-center py-2 px-4'>
                            <div>
                                <h1 className='flex items-center gap-2'>
                                    <FaSchool /> Add Department
                                </h1>
                            </div>
                            <div>
                                <button onClick={() => setDeptModalState(false)} className='bg-red-500 rounded-full text-white text-xl'>
                                    <FaRegTimesCircle />
                                </button>
                            </div>
                        </header>
                        <section className='py-2 px-4'>
                            <form onSubmit={saveDepartment}>
                                <div className="mb-3">
                                    <SelectInput
                                        // icon={<FaSchool className="text-xl"/>}
                                        options={schools}
                                        name="school_id"
                                        className='py-2 w-full'
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <PrimaryTextinput
                                        icon={<FaSchool className="text-xl"/>}
                                        placeholder="Enter Department Name"
                                        type ="text"
                                        name="department"
                                        className='py-2'
                                        required
                                    />
                                </div>
                                
                                <div className="mb-3">
                                    <TextArea
                                        icon={<FaSchool className="text-xl"/>}
                                        placeholder="Description"
                                        type ="text"
                                        name="description"
                                        className='py-2 w-full px-4'
                                    />
                                </div>
                                
                                <div className="pt-5  ">
                                {/* <Button className=" hover:bg-blue-800 w-full border border-[#0000002f]"> Login</Button> */}
                                <Button className="text-white h-11 w-full  justify-center outline-none rounded-md  ">
                                    <FaPlus /> Add
                                </Button>
                                </div>
                            </form>
                        </section>
                    </div>
                </Modal>
            </section>

            {/* Add School Modal */}
            <section>
                <Modal show={schModalState} maxWidth='sm'>
                    <div className=''>
                        <header className='flex justify-between items-center py-2 px-4'>
                            <div>
                                <h1 className='flex items-center gap-2'>
                                    <FaSchool /> Add School
                                </h1>
                            </div>
                            <div>
                                <button onClick={() => setSchModalState(false)} className='bg-red-500 rounded-full text-white text-xl'>
                                    <FaRegTimesCircle />
                                </button>
                            </div>
                        </header>
                        <section className='py-2 px-4'>
                            <form onSubmit={saveSchool}>
                                <div className="mb-3">
                                    <PrimaryTextinput
                                        icon={<FaSchool className="text-xl"/>}
                                        placeholder="Enter School Name"
                                        type ="text"
                                        name="school"
                                        className='py-2'
                                        required
                                    />
                                </div>
                                
                                <div className="pt-5  ">
                                {/* <Button className=" hover:bg-blue-800 w-full border border-[#0000002f]"> Login</Button> */}
                                <Button className="text-white h-11 w-full  justify-center outline-none rounded-md  ">
                                    <FaPlus /> Add
                                </Button>
                                </div>
                            </form>
                        </section>
                    </div>
                </Modal>
            </section>
        </div>
    )
}

export default Departments