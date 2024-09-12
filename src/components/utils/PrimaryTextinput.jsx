import React from 'react'

const PrimaryTextinput = ({icon = '', extraElement = '', className = '', ...props}) => {
  return (
    <div className="flex items-center max-w-full bg-slate-50 rounded-md border">
        { extraElement }
        <input type="text" className={`flex-grow bg-transparent py-2 px-3 focus:outline-none focus:border-none focus:ring-0 active:border-none active:ring-0` + className} {...props} />
        <button type='button' className='px-2 text-slate-500 font-semibold '>
            {icon}
        </button>
    </div>
  )
}

export default PrimaryTextinput