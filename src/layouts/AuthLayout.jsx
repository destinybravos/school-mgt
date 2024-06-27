import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className='flex justify-between'>
      <aside className='bg-primary min-h-dvh flex-grow w-1/2 hidden md:block'>
        <h1>Hello</h1>
      </aside>
      <aside className='px-4 min-h-dvh flex-grow flex-shrink-0 w-1/2 flex justify-center items-center' >
        <div className='w-full max-w-sm'>
          <Outlet />
        </div>
      </aside>
    </div>
  )
}

export default AuthLayout