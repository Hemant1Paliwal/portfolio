import React , {useState} from 'react'
import ToggleButton from './ToggleButton'
import Links from './Links';
import {motion} from 'framer-motion' ;

const Sidebar = () => {

    const [open , setOpen ] = useState(false ) ;

    const variants = {
        open : {
            clipPath : "circle(1200px )" , 
            transition : {
                ease : 'easeInOut' ,
                duration : .5 ,
                
            }

        } , 
        close : {
            clipPath : 'circle(25px at 40px 45px  )' , 
            transition : {
                ease : 'easeInOut' ,
                duration : .5 , 
            }
        }
    }


    const onBtnClick  = () => {
        setOpen(!open) ; 
    }

  return (
    <motion.div  animate = {open ? 'open' : 'close'} variants={variants}  className='flex   flex-col items-center justify-center text-black   fixed z-[11] '>

      <motion.div   className='fixed w-[400px] top-0 left-0 bottom-0 bg-white  ' variants = {variants}>
        {/* links */}
        <Links open = {open}/>
      </motion.div>

      <ToggleButton onBtnClick = {onBtnClick} />

    </motion.div>
  )
}

export default Sidebar
