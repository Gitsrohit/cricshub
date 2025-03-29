"use client";
import { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

// Import local images from public folder
import liveScoringImg from '/public/4.png';
import tournamentViewImg from '/public/1.png';
import teamManagementImg from '/public/3.png';
import fantasyLeagueImg from '/public/2.png';

export default function AppExperienceSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const sliderRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: 'CricsHub',
      image: liveScoringImg,
     
    },
    {
      id: 2,
      title: 'CricsHub Features',
      image: tournamentViewImg,
    
    },
    {
      id: 3,
      title: 'Instant Match',
      image: teamManagementImg,

    },
    {
      id: 4,
      title: 'Effortless scoring',
      image: fantasyLeagueImg,

    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setGlowPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 overflow-hidden bg-gray-900">
      {/* Dynamic background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none transition duration-300"
        style={{
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(56, 182, 255, 0.15) 0%, rgba(15, 23, 42, 1) 70%)`
        }}
      />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-blue-400/20"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.3, 0],
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative z-10 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold mb-4 text-white"
          >
            App Experience
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"
          />
        </div>
        
        <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/70 backdrop-blur-md" ref={sliderRef}>
          <div className="relative h-64 sm:h-80 md:h-[28rem] lg:h-[32rem]">
            {slides.map((slide, index) => (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  x: `${(index - currentSlide) * 100}%`
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 flex items-center justify-center ${index === currentSlide ? 'z-10' : 'z-0'}`}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image 
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 sm:p-8">
                    <h3 className="text-white text-xl sm:text-2xl font-bold">{slide.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-gray-900/70 hover:bg-gray-800/70 backdrop-blur-sm rounded-full p-2 transition-all border border-gray-700 hover:border-blue-400"
          >
            <FiChevronLeft className="text-xl sm:text-2xl text-blue-400" />
          </button>
          
          <button 
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-gray-900/70 hover:bg-gray-800/70 backdrop-blur-sm rounded-full p-2 transition-all border border-gray-700 hover:border-blue-400"
          >
            <FiChevronRight className="text-xl sm:text-2xl text-blue-400" />
          </button>
          
          <div className="flex justify-center mt-4 space-x-2 pb-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentSlide ? 'bg-blue-400 w-4 sm:w-6' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}