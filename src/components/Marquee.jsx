import { motion } from 'framer-motion'
import React from 'react'

function Marquee({items,index,direction}) {
  
  return (
    <div   key={index} className='w-full flex overflow-hidden'>
       <motion.div initial={{x:direction===true?0:'-100%'}} animate={{x:direction===true?"-100%":"0"}} transition={{ease:"linear", duration:20 ,repeat:Infinity}}  className='flex flex-shrink-0 sm:gap-32 gap-20 py-5 pr-20 sm:pr-40'>
       {items.map((url,index)=><img key={index} className='w-[12vw] sm:w-[6.5vw]' src={url}/>)}
       </motion.div>
       <motion.div initial={{x:direction===true?0:'-100%'}} animate={{x:direction===true?"-100%":"0"}} transition={{ease:"linear", duration:20,repeat:Infinity}}  className='flex flex-shrink-0 sm:gap-32 gap-20 py-5 pr-20 sm:pr-40'>
       {items.map((url,index)=><img key={index} className='w-[12vw] sm:w-[6.5vw]' src={url}/>)}
       </motion.div>
       
    </div>
  )
}

export default Marquee