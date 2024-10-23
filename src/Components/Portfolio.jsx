import React, { useRef } from "react";
import { useScroll, motion, useSpring , useTransform  } from "framer-motion";
import projectImage from '../assets/projectImage.png' ;
const Portfolio = () => {
  const divRef = useRef();
  const section  = useRef()  ;

  const items = [
    {
      id: 1,
      name: "Chat App",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, excepturi. Aliquid nam adipisci omnis veniam esse ex? Id ducimus laudantium reiciendis. Impedit consectetur dicta necessitatibus minima expedita dignissimos possimus corrupti.",
      img: projectImage,
    },
    {
      id: 2,
      name: "Ecommerce App",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, excepturi. Aliquid nam adipisci omnis veniam esse ex? Id ducimus laudantium reiciendis. Impedit consectetur dicta necessitatibus minima expedita dignissimos possimus corrupti." ,
      img:projectImage,
    },
    {
      id: 3,
      name: "Food ordering App",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, excepturi. Aliquid nam adipisci omnis veniam esse ex? Id ducimus laudantium reiciendis. Impedit consectetur dicta necessitatibus minima expedita dignissimos possimus corrupti." , 
      img: projectImage,
    },
    {
      id: 4,
      name: "Real estate App",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, excepturi. Aliquid nam adipisci omnis veniam esse ex? Id ducimus laudantium reiciendis. Impedit consectetur dicta necessitatibus minima expedita dignissimos possimus corrupti." , 
      img: projectImage,
    },
  ];
  const { scrollYProgress  } = useScroll({
    target: divRef,
    offset: ["end end", "start start"],
  });
  const {scrollYProgress : scrollYProgress2 } = useScroll({
    target : section , 
    offset : ["start start", "end start"]
  })
  const scale = useTransform(scrollYProgress2 , [0, .5 , 1] , [1.5 , 1.1   , 1 ] )
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div ref={divRef} className="relative">
      <div className="sticky top-0  flex flex-col gap-4 text-center ">
        <h1 className="capitalize text-4xl text-[orange] font-semibold  pt-14">Featured Works </h1>
        <motion.div className="h-3 mx-10  rounded-full bg-white" style={{ scaleX: scaleX }}>{/* progress bar */}</motion.div>
      </div>
     <div className="scroll-smooth snap-mandatory snap-y ">
     {items.map((item, idx) => {
        return (
          <motion.section ref  = {section}  key={idx} className="h-[100vh] snap-start content-center ">
            <motion.div initial = {{opacity : 0 }} whileInView={{opacity : [1]  , transition : {duration : 1.5  , ease  :'easeInOut'    } }  } className="flex items-center justify-center gap-4  max-w-[80%] mx-auto overflow-hidden">
            <motion.img initial={{x : "-300px"}} whileInView  = {{x : 0}}  transition = {{duration : .5 , ease : 'easeInOut'  , delay : .2}}  className="w-[35vw] rounded-xl" src = {projectImage} />
            <motion.div initial = {{x : "300px" }} transition = {{duration : .5 , ease : 'easeInOut'  , delay : .2}} whileInView = {{x : 0  }}  className="flex flex-col gap-6 items-center p-3">
                {/* name of project */}
                <h1 className="text-5xl  text-[white] self-start font-medium ">{item.name}</h1>
                <p className="text-[1rem] text-gray-400">{item.description}</p>
                <motion.button  whileHover={{scale : 1.1} } whileTap={{scale : .9}} className="capitalize py-2 px-4 rounded-xl cursor-pointer text-sm  bg-[orange] text-black self-start ">See demo</motion.button>
            </motion.div>
            </motion.div>
          </motion.section>
        );
      })}
     
     </div>
    </div>
  );
};

export default Portfolio;
