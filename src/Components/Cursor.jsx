import React , {useEffect , useState}  from 'react'; 
import {motion} from 'framer-motion' ;

const Cursor = () => {
    const [position , setPosition] = useState({x : 0 , y : 0 }) ;
    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x : e.clientX , y : e.clientY  })
        }
        window.addEventListener('mousemove' , mouseMove); 

        return () => {
            window.removeEventListener('mousemove' , mouseMove)  ; 
        }
    },[] ) ; 

    useEffect(() => {
        console.log(position.x , position.y) ;

    } , [position] )  ;

  return (
    <motion.div className={`w-10 h-10 bg-white text-white z-[11] absolute  `} animate={{x:position.x + 10  , y : position.y + 10 }}   >
      hello
    </motion.div>
  )
}

export default Cursor
