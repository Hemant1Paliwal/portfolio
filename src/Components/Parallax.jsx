import React , {useRef } from 'react'
import {motion , useScroll , useTransform   } from 'framer-motion' ;

const Parallax = ({type}) => {
    const divRef = useRef() ; 
    const {scrollYProgress} = useScroll(
        {
            target : divRef ,
            offset : ["start start" , "end start"] 

        }
    ) ; 

    const translatey = useTransform(scrollYProgress , [0,.5,1] , ["0%" , "-50%" , "-100%"]) ; 


  return (
    <motion.div  ref  =  {divRef} className={` ${type == 'skills' ? 'bg-gradient-to-r from-[#111132] to-[#0c0c1d]' : 'bg-gradient-to-r from-[#505064] relative to-[#111132]'}   h-full w-full flex items-center justify-center`}>
      <motion.h1  style={{y : translatey }}    className='text-8xl capitalize'>{type == "skills" ? "Skills" : "what we did?" }</motion.h1>
      <motion.div className='mountains w-[100%] h-[100%] bg-cover bg-center absolute z-9 '>
        {/* mountains */}
      </motion.div>

      <motion.div style={{y : translatey }}  className='planets w-full h-full absolute bg-cover bg-center z-8'>
        {/* planets */}
      </motion.div>

      <motion.div transtion = {{ease : 'easeInOut' , duration : .3 }} whileInView = {{opacity : [0,.5,1] , scale : [0,.5,1]}} style = {{y : translatey}} className='stars w-[100%] h-[100%] absolute bg-cover bg-center z-2 '>
        {/* stars */}
      </motion.div>
    </motion.div>
  )
}

export default Parallax
