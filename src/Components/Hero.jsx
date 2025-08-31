import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  const GOOGLE_DOCS_ID = "1VzcidyMnr9m-pWSZCvRnO-S7Wz8HiRij2qoVxjoJP70";
  const PDF_URL = `https://docs.google.com/document/d/${GOOGLE_DOCS_ID}/export?format=pdf`;
  
  // Responsive text animation variants
  const textVariants = {
    initial: {
      x: -200, // Reduced initial offset for smaller screens
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8, // Slightly faster for mobile
        type: "spring",
        stiffness: 100,
        damping: 15,
        ease: "easeInOut",
      },
    },
  };

  // Responsive slider text variants
  const sliderTextVariants = {
    initial: {
      x: "0%"
    },
    animate: {
      x: "-100%",
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 15, // Faster on mobile for better visibility
        ease: "linear"
      }
    }
  };

  // Function to handle Google Drive PDF download
  const downloadCV = () => {
    try {
      // Create a temporary anchor element and trigger download
      const link = document.createElement('a');
      link.href = PDF_URL;
      link.download = 'Hemant_Paliwal_CV.pdf';
      link.target = '_blank'; // Opens in new tab as fallback
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      alert('Failed to download CV. Please try again later.');
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#0c0c1d] to-[#111132] relative min-h-screen flex items-center overflow-hidden">
      <motion.div 
        className="hero w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* text container */}
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate" // Changed from whileInView to animate for immediate trigger
          viewport={{ once: true, amount: 0.3 }} // Better viewport settings
          className="flex flex-col gap-3 sm:gap-4 lg:gap-6 w-full lg:max-w-[60%] xl:max-w-[50%] z-10 relative"
        >
          <motion.h2 
            className="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#623d92] capitalize tracking-[2px] sm:tracking-[4px] lg:tracking-[8px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hemant Paliwal 
          </motion.h2>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl capitalize leading-tight tracking-tighter font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Web developer <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>and <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>ui designer
          </motion.h1>
          
          {/* Buttons container */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 z-10 mt-4 sm:mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a 
              href="#PortFolio" 
              whileHover={{
                scale: 1.03,
                background: "#fff", 
                color: 'black',
                transition: { duration: 0.2 }
              }} 
              whileTap={{scale: 0.97}} 
              className="border-2 border-white py-2 px-4 sm:py-3 sm:px-6 cursor-pointer capitalize rounded-md bg-transparent text-xs sm:text-sm lg:text-base w-full sm:w-auto text-center transition-colors duration-300"
            >
              See the latest work
            </motion.a>
            <motion.a 
              href="#Contact" 
              whileHover={{
                scale: 1.03,
                background: "transparent", 
                color: '#ffffff', 
                borderColor: '#ffffff',
                transition: { duration: 0.2 }
              }} 
              whileTap={{scale: 0.97}} 
              className="border-2 border-white py-2 px-4 sm:py-3 sm:px-6 bg-white text-black rounded-md cursor-pointer capitalize text-xs sm:text-sm lg:text-base w-full sm:w-auto text-center transition-colors duration-300"
            >
              Contact me
            </motion.a>
          </motion.div>

          {/* Download CV Button */}
          <motion.button 
            onClick={downloadCV}
            whileHover={{
              scale: 1.03,
              background: "#f3f4f6",
              transition: { duration: 0.2 }
            }} 
            whileTap={{scale: 0.97}}  
            className="flex items-center justify-center sm:justify-start gap-2 capitalize py-2 px-4 sm:py-3 sm:px-6 bg-white text-black self-stretch sm:self-start cursor-pointer rounded-full mt-2 sm:mt-4 text-xs sm:text-sm lg:text-base font-medium transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Download CV <span><FaDownload className="text-xs sm:text-sm"/></span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Sliding text background - Fixed for mobile */}
      <div className="absolute  left-0 w-full overflow-hidden pointer-events-none">
        <motion.div 
          className="text-[50vw] sm:text-[50vw] md:text-[50vw] lg:text-[50vw] xl:text-[50vw] 2xl:text-[50vw] font-bold text-white/5 sm:text-white/10 whitespace-nowrap"
          variants={sliderTextVariants} 
          initial='initial' 
          animate='animate'
          style={{
            transform: 'translateY(20%)', 
          }}
        >
          Full Stack Developer Full Stack Developer Full Stack Developer
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;