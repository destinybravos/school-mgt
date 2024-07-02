// import React from 'react'
import Button from '../../components/utils/Button'
import PrimaryTextinput  from "../../components/utils/PrimaryTextinput"

// import { FaSignInAlt } from "react-icons/fa"
import { PiBookOpenTextThin } from "react-icons/pi"
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { MdAlternateEmail } from "react-icons/md";

import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

const Register = () => {
  return (
    <div>
       <section className="flex flex-col text-center " >
        <form>
        <div className="text-4xl text-primary flex justify-center pt-3 pb-2 ">
            <div className="py-2 px-2 rounded-full border border-[#0000002f]">
                <Link to="/" className="" > <PiBookOpenTextThin /></Link>
            </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold font-sans py-3">Hello Again!</h1>
                <h6 className="text-sm pb-2">Kindly fill the Required field below to create an account here ok
                 </h6>
            </div>

            <div className="mb-3">
                <PrimaryTextinput
                    icon={<MdOutlineDriveFileRenameOutline className="text-xl"/>}
                    placeholder="Full Name"
                    type =""
                    required
                />
            </div>
            <div className="mb-3">
                <PrimaryTextinput
                    icon={<MdAlternateEmail className="text-xl"/>}
                    placeholder="Enter Email"
                    type ="Email"
                    required
                />
            </div>
            <div className="mb-3">
                <PrimaryTextinput
                    icon={<MdOutlineDriveFileRenameOutline className="text-xl"/>}
                    placeholder="Username"
                    type ="Email"
                    required
                />
            </div>
            <div className="mb-3">
                <PrimaryTextinput
                    icon={<RiLockPasswordLine className="text-xl" />}
                    placeholder="Enter Password"
                    type="Password"
                    required
                />
            </div>
            <div className="mb-1">
                <PrimaryTextinput
                    icon={<RiLockPasswordLine className="text-xl" />}
                    placeholder="Confirm Password"
                    type="Password"
                    required
                />
            </div>
            
            <div className="flex gap-1 py-1">
                <input type="checkbox" name="term" id="term" className="" required/>
                <label htmlFor="term" role='button'>I agree to the term of user</label>
            </div>
                
            
            <div className="pt-5  ">
            {/* <Button className=" hover:bg-blue-800 w-full border border-[#0000002f]"> Login</Button> */}
            <Button className="text-white h-11 w-full  justify-center outline-none rounded-md  ">Register</Button>
            </div>
            <div className=" bg-white py-2 my-4 w-full border border-[#0000002f] h-11 rounded-md">
            <Link to="" className="flex justify-center items-center gap-2 hover:text-blue-800"><FcGoogle className="text-3xl" /> Sign up with Google </Link>
            </div>
            <div className="mt-10 last:md:mt-5 mb-5">
                Already have an account? <Link to="/login" className="text-primary hover:text-blue-800"> Sign in</Link>
            </div>
        </form>
    </section>
    
  

       
    </div>
  )
}

export default Register