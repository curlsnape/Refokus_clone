import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
function Button({title="Get Started"}) {
  return (
    <div className='bg-white rounded-full flex items-center justify-between text-black w-40 py-2 px-2'>
      <span className='text-xs font-semibold'>{title}</span>
      <span className='font-bold'><IoIosReturnRight/></span>
    </div>
  )
}

export default Button