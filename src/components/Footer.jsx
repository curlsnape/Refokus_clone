import React from "react";

function Footer() {
  return (
    <div className="w-full sm:py-10 py-2 px-3">
      <div className="max-w-screen-lg flex sm:gap-20 gap-10 items-center mx-auto ">
        <h1 className="sm:text-[8rem] text-4xl font-medium">refokus.</h1>
        <div className="basis-1/2 flex gap-10">
          <div className="flex flex-col">
            <h4 className="sm:mb-5 mb-3 font-normal text-sm">Socials</h4>
            {["Instagram", "Twitter(X?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="opacity-65 mt-2 font-normal text-xs sm:text-sm ">
                {" "}
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col">
            <h4 className="sm:mb-5 mb-3 font-normal text-sm">Socials</h4>
            {["Instagram", "Twitter(X?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="opacity-65 font-normal text-xs sm:text-sm mt-2">
                {" "}
                {item}
              </a>
            ))}
          </div>
          <div className=" sm:flex hidden basis-1/2 flex-col gap-12 items-end">
            <p className="text-end text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              consequatur dicta totam aperiam adipisci natus!
            </p>
            <span>
              <img
                className=" w-20 rounded object-cover bg-blue-600 py-1 px-2 "
                src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
