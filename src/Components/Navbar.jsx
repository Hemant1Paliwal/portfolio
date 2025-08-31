import React from "react";
import fb from "../assets/fb.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const variants = {
    visible: {
      opacity: [0, 0.5, 1],
      transition: { duration: 1, ease: "easeInOut", staggerChildren: 3 },
    },
  };
  return (
    <motion.div className="h-20 w-[80%] mx-auto content-center  ">
      {/* sidebar */}
      <motion.div
        variants={variants}
        whileInView="visible"
        className="flex items-center justify-between  "
      >
        <motion.h1
          whileInView={{ scale: [0, 0.5, 1], opacity: [0, 0.5, 1] }}
          tansition = {{duration : 1  , ease : 'easeInOut' , delay : .3 }}
          className="uppercase font-semibold text-xl  "
        >
          HEMANT PALIWAL
        </motion.h1>
        {/* <ul className="flex items-center gap-4 ">
          <li>
            <img className="w-8" src={fb} />
          </li>
          <li>
            <img className="w-8" src={github} />
          </li>
          <li>
            <img className="w-8" src={linkedin} />
          </li>
          <li>
            <img className="w-8" src={twitter} />
          </li>
        </ul> */}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
