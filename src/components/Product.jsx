import React from "react";
import Button from "./Button";

function Product({ info, mover, count }) {
  return (
    <div 
      onMouseEnter={() => {
        mover(count);
      }}
      className="w-full h-[14rem] flex items-center px-5 justify-between "
    > 
      <h1 className="text-5xl  font-medium">{info.name}</h1>
      <div className="w-[30%] flex py-[5%] flex-col gap-14">
        <p className="text-sm font-normal">{info.desc}</p>
        <div className="flex gap-5">
          {info.live && <Button title="Live Website" />}
          {info.case && <Button title="Case Study" />}
        </div>
      </div>
    </div>
  );
}

export default Product;
