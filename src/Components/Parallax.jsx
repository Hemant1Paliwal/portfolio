import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
  const divRef = useRef();
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start start", "end start"]
  });

  const translatey = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-50%", "-100%"]);

  const skills = [
    { name: "Node.js", category: "Backend", color: "from-green-400 to-green-600" },
    { name: "React", category: "Frontend", color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", category: "Language", color: "from-blue-500 to-blue-700" },
    { name: "MongoDB", category: "Database", color: "from-green-500 to-green-700" },
    { name: "PostgreSQL", category: "Database", color: "from-blue-600 to-indigo-600" },
    { name: "MySQL", category: "Database", color: "from-orange-400 to-orange-600" },
    { name: "Python", category: "Language", color: "from-yellow-400 to-yellow-600" },
    { name: "Django", category: "Framework", color: "from-green-600 to-green-800" },
    { name: "Docker", category: "DevOps", color: "from-blue-500 to-cyan-500" },
    { name: "CI/CD", category: "DevOps", color: "from-purple-500 to-purple-700" }
  ];

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <motion.div 
      ref={divRef} 
      className={`${
        type === 'skills' 
          ? 'bg-gradient-to-r from-[#111132] to-[#0c0c1d]' 
          : 'bg-gradient-to-r from-[#505064] relative to-[#111132]'
      } min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8`}
    >
      <motion.h1 
        style={{ y: translatey }} 
        className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl capitalize text-white font-bold mb-4 sm:mb-6 md:mb-8 z-10 text-center leading-tight'
      >
        {type === "skills" ? "Skills" : "What we did?"}
      </motion.h1>
      
      {type === "skills" && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10 w-full max-w-7xl"
        >
          {/* Mobile: Single column, Tablet: 2 columns, Desktop: 3 columns, Large: 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3 md:mb-4 text-center">
                  {category}
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className={`bg-gradient-to-r ${skill.color} px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-md sm:rounded-lg text-white font-medium text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-xs sm:text-sm md:text-base`}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Responsive floating skill badges */}
          <div className="absolute inset-0 pointer-events-none hidden sm:block">
            {skills.slice(0, 6).map((skill, index) => (
              <motion.div
                key={`floating-${skill.name}`}
                className={`absolute w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 bg-gradient-to-r ${skill.color} rounded-full opacity-20 sm:opacity-30`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Background layers with responsive adjustments */}
      <motion.div className='mountains w-full h-full bg-cover bg-center absolute z-1 opacity-80 sm:opacity-90 md:opacity-100'>
        {/* mountains */}
      </motion.div>

      <motion.div 
        style={{ y: translatey }} 
        className='planets w-full h-full absolute bg-cover bg-center z-2 opacity-60 sm:opacity-70 md:opacity-80'
      >
        {/* planets */}
      </motion.div>

      <motion.div 
        transition={{ ease: 'easeInOut', duration: 0.3 }} 
        whileInView={{ opacity: [0, 0.3, 0.6], scale: [0, 0.5, 1] }} 
        style={{ y: translatey }} 
        className='stars w-full h-full absolute bg-cover bg-center z-3 opacity-40 sm:opacity-50 md:opacity-60'
      >
        {/* stars */}
      </motion.div>

      {/* Additional responsive enhancements */}
      {type === "skills" && (
        <>
          {/* Mobile-friendly scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 block sm:hidden"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>

          {/* Background gradient overlay for better text readability on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-0 block sm:hidden" />
        </>
      )}
    </motion.div>
  );
};

export default Parallax;