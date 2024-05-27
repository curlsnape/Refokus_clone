import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="text-white w-full ">
      <div className="max-w-screen-lg mx-auto py-5 flex items-center border-b-[1px] border-b-zinc-600 justify-between">
        <div className="flex items-center">
          <img className=" w-20"
            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
            alt=""
          />
          <div className="links flex gap-14 ml-20">
            {["Home", "Work", "About", "", "News"].map((item, index) => item.length===0 ?<span key={index} className="w-[2px] h-5 bg-zinc-600"></span>:(
              <a key={index} className="text-xs flex gap-2 items-center ">
                {index === 1 && <span style={{boxShadow:'0 0 0.45em #00FF19 ',backgroundColor:'#00FF19'}}  className="w-[7px] h-[7px] rounded-full inline-block bg-green-500"></span>}
                {item}</a>
            ))}
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default Navbar;
