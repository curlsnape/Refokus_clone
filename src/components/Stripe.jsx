import { motion } from "framer-motion";
import React from "react";

function Stripe({ img }) {
  return (
    <>
      <div className="sm:w-[16.66%]  sm:flex border-zinc-600 hidden border-r-[1px]  items-center justify-between py-6 sm:px-2 border-t-[1px] border-b-[1px]">
        <>
          {" "}
          <img className="w-14 sm:w-32" src={img.url} alt="" />
          <span className="font-medium text-xs sm:text-sm">{img.num}</span>
        </>
      </div>
      <div className="w-[70.66%] sm:hidden flex border-zinc-600  border-r-[1px]  items-center justify-between py-6 px-2 border-t-[1px] border-b-[1px]">
        <>
          {" "}
          <img className="w-20" src={img.url} alt="" />
          <span className="font-medium text-xs sm:text-sm">{img.num}</span>
        </>
      </div>
    </>
  );
}

export default Stripe;
