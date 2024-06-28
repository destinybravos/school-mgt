import React from 'react'

const ForgotPassword = () => {
  return (
    <div>
      <div className="flex justify-center items-center  bg-slate-600 ">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 class="text text-3xl block text-center font-semibold"> FORGET PASSWORD </h1>
            <hr class="mt-3" />
                <div className="mt-3">
                    <p class="block  text-center mb-5">
                         A Mail Will Be Sent To Your Email 
                    </p>
                    <input type="email"  placeholder=" Enter Your Email Address" class="border-2 w-full text-base mb-3 px-2 py-1 focus:outline-0 focus:ring-0 focus:border-gray-600  hover:border-none"/>
                    <input type="password"  placeholder=" Enter New Password" class="border-2 w-full text-base mb-3 px-2 py-1 focus:outline-0 focus:ring-0 focus:border-gray-600  hover:border-none"/>
                  
                </div>    
                <div class="mt-5">
                    <button type="submit" class="border-2 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700  font-bold">
                         SEND
                    </button>
                </div>
        </div>
    </div>
    </div>
  )
}

export default ForgotPassword