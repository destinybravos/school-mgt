import Button from "../../components/utils/Button"
// import { FaSignInAlt } from "react-icons/fa"
import { PiBookOpenTextThin } from "react-icons/pi"
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
// import Register from "./Register"
// import ForgotPassword from "./ForgotPassword"

const Login = () => {
  return (
    <section className="flex flex-col text-center" >
        <div className="text-4xl text-primary flex justify-center pt-3 pb-2">
          <Link to="/" className="" > <PiBookOpenTextThin /></Link>
        </div>
        <div>
          <h1 className="text-3xl font-bold font-sans py-3">Hello Again!</h1>
          <h6 className="text-sm pb-2">Lorem ipsum dolor, sit amet  adipisicing elit.
            Iure quidem  sequi voluptas
          </h6>
        </div>
        <div className="pt-2">
          <input type="Email" placeholder="Email"  className="w-full h-10 p-2 outline-none border rounded-md border-[#3a3939]" />
        </div>
        <div className="pt-2">
          <input type="Password" placeholder="Password" className="w-full h-10 p-2 outline-none border rounded-md border-[#3a3939]" />
        </div>
      <div className="flex justify-between py-1">
          <div className="flex gap-1">
            <input type="checkbox" name="" id="" className="" />
            <label htmlFor="">Remember Me</label>
          </div>
          <div>
            <Link to="/forget-password" className="text-primary hover:text-blue-800" > Recovery Password</Link>
          </div>
      </div>
      <div className="pt-5  ">
        <Button className=" hover:bg-blue-800 h-10 w-full"> Login</Button>
      </div>
      <div className=" bg-white py-4 my-4 w-full">
        <Link to="" className="flex justify-center items-center gap-2 hover:text-blue-800"><FcGoogle className="text-3xl" /> Sign in with Google </Link>
      </div>
      <div className="pt-14">
           Dont have an account yet? <Link to="/register" className="text-primary hover:text-blue-800"> Sign Up</Link>
        </div>
    </section>
    
  )
}

export default Login