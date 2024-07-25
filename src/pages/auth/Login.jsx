import Button from "../../components/utils/Button"
// import { FaSignInAlt } from "react-icons/fa"
import { PiBookOpenTextThin } from "react-icons/pi"
import { Link, useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { MdAlternateEmail } from "react-icons/md";
import PrimaryTextinput from "../../components/utils/PrimaryTextinput";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { getActiveUser, saveActiveUser, saveToken } from "../../helpers/auth";


const Login = () => {
  let navigator = useNavigate();
  let loginUser = (ev) => {
    ev.preventDefault();
    let formdata = new FormData(ev.target);
    axios.post(`http://localhost/school-mgt/api/auth/login.php`, formdata)
    .then((response) => {
        if (response.data.success == true) {
            saveToken(response.data.api_token);
            saveActiveUser(response.data.user);
            navigator('/dashboard');
        }
    })
    .catch((error) => {
        alert(error.response.data.message)
    })
  }

  return (
    <section className="flex flex-col text-center " >
      <form onSubmit={loginUser}>
        <div className="text-4xl text-primary flex justify-center pt-3 pb-2 ">
          <div className="py-2 px-2 rounded-full border border-[#0000002f]">
            <Link to="/" className="" > <PiBookOpenTextThin /></Link>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold font-sans py-3">Hello Again!</h1>
          <h6 className="text-sm pb-2">Lorem ipsum dolor, sit amet  adipisicing elit.
            Iure quidem  sequi voluptas
          </h6>
        </div>
        <div className="mb-3">
          <PrimaryTextinput
            icon={<MdAlternateEmail className="text-xl"/>}
            placeholder="Enter Email"
            type ="Email"
            name="email"
            required
          />
        </div>
        <div className="">
          <PrimaryTextinput
            icon={<RiLockPasswordLine className="text-xl" />}
            placeholder="Enter Password"
            type="Password"
            name="password"
            required
          />
        </div>
        <div className="flex justify-between py-1">
          <div className="flex gap-1">
            <input type="checkbox" name="remember" id="remember" className=""/>
            <label htmlFor="remember">Remember Me</label>
          </div>
          <div>
            <Link to="/forget-password" className="text-primary hover:text-blue-800" > Recovery Password</Link>
          </div>
        </div>
        <div className="pt-5  ">
          {/* <Button className=" hover:bg-blue-800 w-full border border-[#0000002f]"> Login</Button> */}
          <Button className="text-white h-11 w-full  justify-center outline-none rounded-md  ">Login</Button>
        </div>
        <div className=" bg-white py-2 my-4 w-full border border-[#0000002f] h-11 rounded-md">
          <Link to="" className="flex justify-center items-center gap-2 hover:text-blue-800"><FcGoogle className="text-3xl" /> Sign in with Google </Link>
        </div>
        <div className="mt-10 last:md:mt-14">
            Dont have an account yet? <Link to="/register" className="text-primary hover:text-blue-800"> Sign Up</Link>
          </div>
      </form>
    </section>
    
  )
}

export default Login