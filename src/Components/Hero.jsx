import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
const Hero = () => {
  const textVariants = {
    initial: {
      x: -400,
      opacity: 0,
    },
  
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 110,
        ease: "easeInOut",
      },
    },
  }

  const sliderTextVariants = {
    initial : {
        x : 0 
    }
    , 
    animate : {
        x : '-210%' ,
        transition : {
            repeat : Infinity , 
            repeatType : 'mirror' ,
            duration : 20
        }


    }
  }
  ;
  return (
    <div className="bg-gradient-to-r from-[#0c0c1d] to-[#111132] relative">
      <motion.div className="hero content-center  w-[80%] mx-auto  ">
        {/* text container */}
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          className="flex flex-col gap-4  max-w-[50%] z-9"
        >
          <h2 className="text-2xl text-[#623d92] capitalize tracking-[8px]">
            Hemant Paliwal 
          </h2>
          <h1 className="text-8xl capitalize leading-tight tracking-tighter">
            Web developer <br />
            and <br /> ui designer{" "}
          </h1>
          <div className="flex items-center gap-4 z-10 ">
            <motion.a href = "#PortFolio" whileHover = {{scale : 1.2  ,background : "#fff" ,  color : 'black'}} whileTap  = {{scale : .9 }} className="border-2 p-3 cursor-pointer capitalize rounded-md bg-transparent text-sm  ">
              See the latest work
            </motion.a>
            <motion.a href = "#Contact" whileHover = {{scale : 1.2 ,  background : "transparent" ,  color : '#ffffff'}} whileTap  = {{scale : .9 }} className="border-2 p-3 bg-white text-black rounded-md  cursor-pointer capitalize text-sm ">
              Contact me
            </motion.a>
          </div>
          <motion.button whileHover = {{scale : 1.2 }} whileTap  = {{scale : .9 }}  while  className="flex  items-center gap-2 capitalize p-3 bg-white text-black self-start cur rounded-full mt-4">Download CV <span><FaDownload/></span></motion.button>
        </motion.div>
      </motion.div>
      <motion.div className="absolute text-[50vh] w-[100%]    bottom-[-80px]  opacity-10 z-2 whitespace-nowrap " variants={sliderTextVariants} initial='initial' animate = 'animate'  >
        {/* sliding text container */}
        Full Stack Developer
      </motion.div>
    </div>
  );
};

export default Hero;
