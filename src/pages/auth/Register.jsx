import React from 'react'
import Button from '../../components/utils/Button'

const Register = () => {
  return (
    <div>
       <section >
          <div className=' min-h-[500px] max-w-[400px] flex flex-col justify-center items-center h-auto px-4 rounded-md'>
            <h1 className="text-2xl font-sans font-black text-[#334155]">Registration Form</h1>
            <form action="">
                <div className="py-4">
                    <input type="text" name="username" placeholder="Username" required className="w-full h-10 outline-none p-2 bg-transparent text-black border-2 border-primary rounded-md active:border-[#334155] hover:border-[#334155]" />
                </div>

                <div className="py-4">
                      <input type="text" name="fullname" placeholder="Full Name" required className="w-full h-10 outline-none p-2 bg-transparent text-black border-2 border-primary rounded-md active:border-[#334155] hover:border-[#334155]" />
                  </div>

                  <div className="py-4">
                      <input type="email" name="email" placeholder="name@email.com" required className="w-full h-10 outline-none p-2 bg-transparent text-black border-2 border-primary rounded-md active:border-[#334155] hover:border-[#334155]" />
                  </div >

                  <div className="py-4">
                      <input type="password" name="password" placeholder="Password" required className="w-full h-10 outline-none p-2 bg-transparent  text-black border-2 border-primary rounded-md active:border-[#334155] hover:border-[#334155]" />
                  </div>

                  <div className="py-2 relative">
                      <input type="text"  name="avatar" id="avatar" placeholder="avatar URL" required className="w-full h-10 outline-none p-2 bg-transparent text-black border-2 border-primary rounded-md active:border-[#334155] hover:border-[#334155]" />
                      <div id="avatar-container" className="absolute max-h-32 overflow-y-auto w-full bg-white ">
                          <section className="w-full py-1 px-2 grid grid-cols-4"></section>
                      </div>
                  </div>

                  <div className="py-4 flex justify-center items-center font-sans text-lg pt-2 pb-1">
                      <button className="p-2 bg-primary w-[300px] text-white hover:bg-[#334155] ">CREATE ACCOUNT</button>
                  </div>

                  <div className="flex justify-center items-center font-sans text-lg py-2">
                      <h1 className="text-primary text-sm hover:underline hover:text-blue-500">Already have an account? Click to Login</h1>
                  </div>
            </form>
          </div>
       </section>

       
    </div>
  )
}

export default Register