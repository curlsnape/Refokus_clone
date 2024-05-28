import React from "react";
import Button from "./Button";

function Product({ info, mover, count }) {
  return (
    <div 
      onMouseEnter={() => {
        mover(count);
      }}
      className="w-full h-[13rem] flex items-center sm:mt-5 px-2 justify-between "
    > 
      <h1 className="sm:text-5xl text-2xl font-medium">{info.name}</h1>
      <div className="w-[30%] flex  flex-col gap-10">
        <p className="sm:text-sm hidden sm:inline-block text-xs font-normal">{info.desc}</p>
        <div className="flex gap-5">
          {info.live && <Button title="Live Website" />}
        <div className="hidden sm:inline">  {info.case && <Button title="Case Study" />}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
