import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
function Button({title="Get Started"}) {
  return (
    <div className='bg-white rounded-full flex items-center justify-between text-black sm:w-40 w-24 py-2 px-1 sm:px-4'>
      <span className='sm:text-xs text-[2.8vw]  font-semibold'>{title}</span>
      <span className='font-bold sm:text-xs text-[2.8vw]'><IoIosReturnRight/></span>
    </div>
  )
}

export default Button