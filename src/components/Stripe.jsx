import React from 'react'

function Stripe({img}) {
  return (
    <div className='w-[16.66%] border-zinc-600 border-r-[1px] flex items-center justify-between py-6 px-2 border-t-[1px] border-b-[1px]'>
        <img src={img.url} alt="" />
        <span className='font-medium text-sm'>{img.num}</span>
    </div>
  )
}

export default Stripe