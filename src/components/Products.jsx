import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const info = [
    {
      name: "Arqitel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      name: "Rainfall",
      desc: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: false,
    },
    {
      name: "YIR 2024",
      desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      name: "Yahoo!",
      desc: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: false,
    },
  ];

  const [pos, setpos] = useState(0);

  const mover = (val) => {
    setpos(val * 13);
  };
  return (
    <div className="w-full py-10  sm:mt-14 relative">
      <div className="max-w-screen-lg  mx-auto">
        {info.map((item, index) => (
          <Product key={index} mover={mover} count={index} info={item} />
        ))}
      </div>
      <div className="w-full h-full pointer-events-none sm:py-20 py-24 top-[0%] absolute">
        <motion.div
          initial={{ y: pos, x: "-60%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className=" sm:w-[25vw] w-[35vw]  h-[13rem] absolute left-[52%] -translate-x-[60%] overflow-hidden "
        >
          <motion.div 
          
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76, 0, 0.24, 1], duration:0.4 }}
            className="w-full h-full  "
          ><video autoPlay muted loop src="https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm"></video></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76, 0, 0.24, 1], duration:0.4 }}
            className="w-full h-full "
          ><video autoPlay muted loop src="https://cdn.refokus.com/refokus-promo/webflow-education-promo.mp4"></video></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76, 0, 0.24, 1], duration:0.4 }}
            className="w-full h-full "
          ><video autoPlay muted loop src="https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm"></video></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ease:[0.76, 0, 0.24, 1], duration:0.4 }}
            className="w-full h-full "
          ><video autoPlay muted loop src="https://cdn.refokus.com/website/2022/videos/yahoo.webm"></video></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
