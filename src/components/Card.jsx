import { motion } from "framer-motion";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
function Card({ width, hover, start, para, firsth, mainh }) {
  
  return (
    <motion.div whileHover={{backgroundColor:hover && '#7443ff',padding:'20px'}}
      className={`w-1/2 bg-zinc-800 ${width} p-3 min-h-[28rem] flex flex-col justify-between rounded-xl`}
    >
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h4 className="text-sm">{firsth}</h4>
          <span>
            <HiOutlineArrowRight />
          </span>
        </div>
        <h1 className="text-3xl mt-5">{mainh}</h1>
      </div>
      <div className="w-full">
        {start && (
          <>
            <h1 className="text-5xl font-medium">Start a Project</h1>
            <button className="bg-white text-sm font-medium text-black rounded-full mt-5 px-3 py-1">
              Contact us
            </button>
          </>
        )}
        {para && (
          <p className="opacity-60 font-medium text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
