import React, { useState, useEffect } from 'react';
import ToggleButton from './ToggleButton';
import Links from './Links';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');

  // Track screen size for responsive behavior
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize('mobile');
      else if (width < 1024) setScreenSize('tablet');
      else setScreenSize('desktop');
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Responsive variants based on screen size
  const getVariants = () => {
    const baseTransition = {
      ease: 'easeInOut',
      duration: 0.5,
    };

    switch (screenSize) {
      case 'mobile':
        return {
          open: {
            clipPath: "circle(800px)",
            transition: baseTransition,
          },
          close: {
            clipPath: 'circle(20px at 35px 40px)',
            transition: baseTransition,
          }
        };
      case 'tablet':
        return {
          open: {
            clipPath: "circle(1000px)",
            transition: baseTransition,
          },
          close: {
            clipPath: 'circle(22px at 38px 42px)',
            transition: baseTransition,
          }
        };
      default:
        return {
          open: {
            clipPath: "circle(1200px)",
            transition: baseTransition,
          },
          close: {
            clipPath: 'circle(25px at 40px 45px)',
            transition: baseTransition,
          }
        };
    }
  };

  const variants = getVariants();

  const onBtnClick = () => {
    setOpen(!open);
  };

  // Close sidebar when clicking outside on mobile
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && open) {
      setOpen(false);
    }
  };

  return (
    <>
      {/* Backdrop for mobile/tablet */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-[9] lg:hidden"
          onClick={handleBackdropClick}
        />
      )}

      <motion.div
        animate={open ? 'open' : 'close'}
        variants={variants}
        className="flex flex-col items-center justify-center text-black fixed z-[11]"
      >
        <motion.div
          className="fixed top-0 left-0 bottom-0 bg-white shadow-2xl
                     w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]
                     max-w-[85vw] sm:max-w-[75vw] md:max-w-[65vw] lg:max-w-[400px]"
          variants={variants}
        >
          {/* Links */}
          <Links open={open} />
        </motion.div>

        <ToggleButton onBtnClick={onBtnClick} />
      </motion.div>
    </>
  );
};

export default Sidebar;