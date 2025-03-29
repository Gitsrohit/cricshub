"use client";
import { FiAward, FiCalendar, FiUsers, FiBarChart2, FiYoutube, FiDollarSign } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FeaturesSection() {
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {
    const handleMouseMove = (e) => {
      setGlowPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <FiAward className="text-blue-400" />,
      title: 'Live Match Scoring',
      desc: 'Real-time scoring for local matches with detailed ball-by-ball commentary'
    },
    {
      icon: <FiCalendar className="text-blue-400" />,
      title: 'Tournament Scheduler',
      desc: 'Create and manage complete tournaments with automatic fixtures generation'
    },
    {
      icon: <FiUsers className="text-blue-400" />,
      title: 'Team Management',
      desc: 'Create teams, assign roles, and track player availability'
    },
    {
      icon: <FiBarChart2 className="text-blue-400" />,
      title: 'Advanced Statistics',
      desc: 'Detailed player stats, team performance metrics, and historical data'
    },
    {
      icon: <FiYoutube className="text-blue-400" />,
      title: 'Live Streaming',
      desc: 'Stream matches directly to YouTube with integrated score overlays'
    },
    {
      icon: <FiDollarSign className="text-blue-400" />,
      title: 'Fantasy Cricket',
      desc: 'Create fantasy leagues for scheduled matches with real-time points'
    }
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Full-screen background elements */}
      <div 
        className="fixed inset-0 pointer-events-none transition duration-300"
        style={{
          background: `
            radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(56, 182, 255, 0.15) 0%, rgba(15, 23, 42, 1) 70%),
            linear-gradient(${scrollY * 0.2}deg, rgba(56, 182, 255, 0.05) 0%, transparent 50%)
          `,
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      />

      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-blue-400/20"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              opacity: 0,
              rotate: Math.random() * 360
            }}
            animate={{
              opacity: [0, 0.3, 0],
              rotate: [null, Math.random() * 360],
              transition: {
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed rounded-full bg-blue-400/30"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            width: Math.random() * 10 + 2,
            height: Math.random() * 10 + 2,
            opacity: 0.5
          }}
          animate={{
            x: [null, Math.random() * 100 + '%'],
            y: [null, Math.random() * 100 + '%'],
            opacity: [0.3, 0.7, 0.3],
            transition: {
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
        />
      ))}


<div className="relative z-10 w-full max-w-6xl mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 text-white"
          >
            Complete Cricket Ecosystem
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-blue-500 mx-auto"
          />
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ 
                y: -8,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                borderColor: "rgba(59, 130, 246, 0.5)"
              }}
              className="bg-gray-900/70 backdrop-blur-md p-6 rounded-xl border border-gray-800 transition-all"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="mb-4 text-3xl"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}