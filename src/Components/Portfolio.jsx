import React, { useRef, useState, useEffect } from "react";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Portfolio = () => {
  const divRef = useRef();
  const section = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const items = [
    {
      id: 1,
      name: "Social Media AI Assistant",
      description: `droids.social is an AI-powered social media assistant that helps users create
                    engaging content, schedule posts, and plan campaigns for a month across multiple platforms.
                    Built with React.js and Node.js, it uses PostgreSQL for data management and integrates
                    OpenAI and Grok LLMs for smart content generation. The platform also features seamless
                    payment processing with Stripe and DodoPayments.`,
      img: [
        "https://res.cloudinary.com/dbnivp7nr/image/upload/v1756617363/Screenshot_2025-08-31_at_10.45.45_AM_qkzedz.png",
        "https://res.cloudinary.com/dbnivp7nr/image/upload/v1756617363/Screenshot_2025-08-31_at_10.45.34_AM_ovbwwi.png",
        "https://res.cloudinary.com/dbnivp7nr/image/upload/v1756617363/Screenshot_2025-08-31_at_10.45.45_AM_qkzedz.png",
        "https://res.cloudinary.com/dbnivp7nr/image/upload/v1756051654/Screenshot_2025-08-24_at_9.36.22_PM_ses2zf.png",
        "https://res.cloudinary.com/dbnivp7nr/image/upload/v1756617362/Screenshot_2025-08-31_at_10.45.09_AM_bfe3gv.png",
      ],
      demoUrl: "https://www.droids.social/",
    },
    {
      id: 2,
      name: "Transform Buddy",
      description:
        `Transform Buddy is an AI-powered fitness platform that makes
          personalized coaching accessible to everyone. It offers AI-powered workout plans, nutrition
          tracking, advanced analytics, goal tracking, habit building, community support, personalized
          insights, and detailed progress tracking with premium AI models for superior
          recommendations. Built with React.js, Node.js, and PostgreSQL, it integrates OpenAI and Grok
          LLMs for smart guidance and uses Stripe and DodoPayments for seamless payments.`,
      img: [
        "https://res.cloudinary.com/dbnivp7nr/image/upload/v1756616535/Screenshot_2025-08-31_at_10.30.04_AM_wllhuv.png",
        "https://res.cloudinary.com/dbnivp7nr/image/upload/v1756616535/Screenshot_2025-08-31_at_10.30.51_AM_wfefth.png",
        "https://res.cloudinary.com/dbnivp7nr/image/upload/v1756616534/Screenshot_2025-08-31_at_10.30.22_AM_mpz56c.png",
      ],
      demoUrl: "https://www.transformbuddy.ai/",
    },
    {
      id: 3,
      name: "Custom GPT",
      description:
        `Chattodata is a multi-lingual web application provides the ragbot functionality with
        shareable chatbots and chatbots can be integrated among different application. It provides
        the user to upload multiple documents at the same time and can chat with the document and
        provides various setting option among the chats with the chatbot. Chatbot provides the link
        of document from where the result is generated and it can provide the result from outside
        the document if enabled from the application.
        This application provides subscription model with monthly based subscription using the stripe
        payment gateway.`,
      img: [
        "https://res.cloudinary.com/dbnivp7nr/image/upload/v1756617228/Screenshot_2025-08-31_at_10.41.54_AM_m7ltgj.png",
        "https://res.cloudinary.com/dbnivp7nr/image/upload/v1756617228/Screenshot_2025-08-31_at_10.42.08_AM_el2mbd.png",
        "https://res.cloudinary.com/dbnivp7nr/image/upload/v1756617228/Screenshot_2025-08-31_at_10.43.20_AM_bpopia.png",
      ],
      demoUrl: "https://customgpt.ai/",
    },
    {
      id: 4,
      name: "𝗦𝗵𝗼𝗼𝗿𝗮𝗵",
      description:
        `Shoorah is an innovative well-being app and website dedicated to mental health and
          overall wellness, featuring an advanced chatbot for emotional support leveraging OpenAI's
          Large language model (LLM). Its therapy tools aid in improving mood, sleep, anxiety
          management, stress reduction, and promoting daily joy.`,
      img: [
        "https://res.cloudinary.com/dbnivp7nr/image/upload/v1756616966/Screenshot_2025-08-31_at_10.37.23_AM_y56cdr.png",
        "https://res.cloudinary.com/dbnivp7nr/image/upload/v1756616967/Screenshot_2025-08-31_at_10.38.16_AM_vbbeor.png",
        "https://res.cloudinary.com/dbnivp7nr/image/upload/v1756616967/Screenshot_2025-08-31_at_10.38.57_AM_jtlqus.png",
      ],
      demoUrl: "https://shoorah.io/",
    },
  ];

  // Auto slide functionality
  useEffect(() => {
    const intervals = [];
    
    items.forEach((item) => {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => ({
          ...prev,
          [item.id]: ((prev[item.id] || 0) + 1) % item.img.length
        }));
      }, 3000);
      intervals.push(interval);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [items]);

  const navigateImage = (itemId, direction) => {
    const item = items.find(i => i.id === itemId);
    if (!item) return;

    setCurrentImageIndex(prev => {
      const currentIndex = prev[itemId] || 0;
      let newIndex;
      
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % item.img.length;
      } else {
        newIndex = currentIndex === 0 ? item.img.length - 1 : currentIndex - 1;
      }
      
      return { ...prev, [itemId]: newIndex };
    });
  };

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["end end", "start start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: section,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress2, [0, 0.5, 1], [1.5, 1.1, 1]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={divRef} className="relative bg-black min-h-screen">
      {/* Header Section */}
      <div className="sticky top-0 flex flex-col gap-4 text-center z-10 bg-black/90 backdrop-blur-sm">
        <h1 className="capitalize text-2xl sm:text-3xl lg:text-4xl text-orange-500 font-semibold pt-8 sm:pt-12 lg:pt-14 px-4">
          Featured Works
        </h1>
        <motion.div
          className="h-2 sm:h-3 mx-4 sm:mx-8 lg:mx-10 rounded-full bg-white"
          style={{ scaleX: scaleX }}
        />
      </div>

      {/* Portfolio Items */}
      <div className="scroll-smooth snap-mandatory snap-y">
        {items.map((item, idx) => {
          const currentIndex = currentImageIndex[item.id] || 0;
          
          return (
            <motion.section
              ref={section}
              key={idx}
              className="min-h-screen snap-start flex items-center justify-center py-8 sm:py-12 lg:py-16"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1.5, ease: "easeInOut" },
                }}
                className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
              >
                {/* Image Carousel */}
                <motion.div
                  initial={{ x: "-300px" }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                  className="relative w-full lg:w-1/2 max-w-lg lg:max-w-none"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out h-full"
                      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                      {item.img.map((imgSrc, imgIdx) => (
                        <img
                          key={imgIdx}
                          className="w-full h-full object-cover flex-shrink-0"
                          src={imgSrc}
                          alt={`${item.name} screenshot ${imgIdx + 1}`}
                        />
                      ))}
                    </div>
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={() => navigateImage(item.id, 'prev')}
                      className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 sm:p-2 transition-all duration-200 hover:scale-110"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                    </button>
                    
                    <button
                      onClick={() => navigateImage(item.id, 'next')}
                      className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 sm:p-2 transition-all duration-200 hover:scale-110"
                      aria-label="Next image"
                    >
                      <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
                      {item.img.map((_, imgIdx) => (
                        <button
                          key={imgIdx}
                          onClick={() => setCurrentImageIndex(prev => ({ ...prev, [item.id]: imgIdx }))}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                            imgIdx === currentIndex ? 'bg-orange-500' : 'bg-white/50'
                          }`}
                          aria-label={`Go to image ${imgIdx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ x: "300px" }}
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
                  whileInView={{ x: 0 }}
                  className="flex flex-col gap-4 sm:gap-6 items-center lg:items-start p-3 w-full lg:w-1/2"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-medium text-center lg:text-left leading-tight">
                    {item.name}
                  </h2>
                  
                  <p className="text-sm sm:text-base lg:text-lg text-gray-400 text-center lg:text-left leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="capitalize py-2 sm:py-3 px-4 sm:px-6 rounded-xl cursor-pointer text-sm sm:text-base font-medium bg-orange-500 hover:bg-orange-600 text-black transition-colors duration-200 mt-2"
                  >
                    <a
                      target="_blank"
                      href={item.demoUrl}
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      See Demo
                    </a>
                  </motion.button>
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