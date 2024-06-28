import React from 'react'

const ResetPassword = () => {
  return (
    <section className='px-3'>
       <div className='mb-6'>
          <h1 className='text-3xl font-semibold mb-5'>
                Reset account password
          </h1>
          <p className='text-slate-500'>
              Enter a new password for noreply@spotify.com
          </p>
       </div>

       <input className='border-2 border-slate-400 w-full outline-none py-1 pl-1 mb-3' type="password" name='password' placeholder='Enter password' />
       <input className='border-2 border-slate-400 w-full outline-none py-1 pl-1' type="password" name='password' placeholder='Confirm password' />

       <div className='text-center mt-7'>
          <button className='py-2 px-5 bg-primary text-white hover:bg-[#445858]'>
              Reset Password
          </button>
       </div>
    </section>
  )
}

export default ResetPassword