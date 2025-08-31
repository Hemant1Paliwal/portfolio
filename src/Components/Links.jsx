import React from "react";
import { motion } from "framer-motion";

const Links = ({open}) => {
  const items = ["HomePage", "skills" , "PortFolio", "Contact"];
  const parentVariants = {
    open : {
      transition  : {
        delayChildren  : 3 , 
        staggerChildren :1
      }
    }
  }  
  const itemsVariants = {
    open: {opacity : 1 , y : 0 , transition : {ease : 'easeInOut' , type : 'spring' , stiffness  : 120   , duration : 5  }  } , 
    close : {opacity : 0  , y : 100 , transition : {ease : 'easeInOut' , type : 'spring' , stiffness  : 120   , duration : 5  }  },

  };
  return (
    <motion.div variants={parentVariants}    className="w-full h-full  flex flex-col absolute gap-4 items-center justify-center  ">
      {items.map((item, index ) => {
        return (
          <motion.a
            href={`#${item}`}
            key = {index} 
            whileHover={{ scale: 1.2, color: "#1876d2" }}
            transition={{ duration: 1, type: "spring", stiffness: 120 }}
            className="text-3xl capitalize"
            variants={itemsVariants}
            animate = {open ? 'open' : 'close'} 
          >
            {item}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Links;
