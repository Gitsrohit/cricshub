"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaBroadcastTower, FaChartLine, FaTrophy, FaMobile, FaArrowRight } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiLiveLine } from 'react-icons/ri';
import { SiAndroid, SiApple } from 'react-icons/si';

export default function HeroSection() {
    const [countdown, setCountdown] = useState('');
    const [email, setEmail] = useState('');
    const [notifyStatus, setNotifyStatus] = useState('idle');
    const emailInputRef = useRef(null);

    useEffect(() => {
        const launchDate = new Date('2025-05-01').getTime();
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            setCountdown(`${days}d ${hours}h ${minutes}m`);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleNotify = () => {
        if (!email) return;

        setNotifyStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setNotifyStatus('success');
            setEmail('');
            if (emailInputRef.current) {
                emailInputRef.current.focus();
            }

            // Reset after 2 seconds
            setTimeout(() => {
                setNotifyStatus('idle');
            }, 2000);
        }, 1500);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 px-4 py-12 sm:py-16">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(circle at 20% 30%, rgba(56, 182, 255, 0.25) 0%, transparent 40%)`
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(circle at 80% 70%, rgba(124, 58, 237, 0.2) 0%, transparent 40%)`
                    }}
                />
                <div
                    className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-gray-900"
                />
            </div>

            {/* Animated grid overlay - more dynamic */}
            <div className="absolute inset-0 opacity-10 sm:opacity-15">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute border border-blue-400/20"
                        initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            width: Math.random() * 300 + 50,
                            height: Math.random() * 300 + 50,
                            opacity: 0,
                            rotate: Math.random() * 360
                        }}
                        animate={{
                            opacity: [0, 0.4, 0],
                            rotate: [0, 180],
                            transition: {
                                duration: Math.random() * 25 + 15,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        }}
                    />
                ))}
            </div>

            {/* Floating particles - more with varied sizes */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30"
                    style={{
                        width: Math.random() * 10 + 2,
                        height: Math.random() * 10 + 2,
                    }}
                    initial={{
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        opacity: 0
                    }}
                    animate={{
                        x: [null, Math.random() * 100 + '%'],
                        y: [null, Math.random() * 100 + '%'],
                        opacity: [0, 0.8, 0],
                        transition: {
                            duration: Math.random() * 25 + 15,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }
                    }}
                />
            ))}

            {/* Animated pulse circles */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full border border-blue-400/30 pointer-events-none"
                    style={{
                        width: 100 + i * 200,
                        height: 100 + i * 200,
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                    initial={{
                        scale: 0,
                        opacity: 0
                    }}
                    animate={{
                        scale: [0, 1.5],
                        opacity: [0.6, 0],
                    }}
                    transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: "easeOut"
                    }}
                />
            ))}

            <div className="relative z-10 text-center w-full max-w-4xl flex flex-col items-center">
                {/* Enhanced logo with glow effect */}
                <motion.div
                    className="flex justify-center mb-6 sm:mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <div className="relative w-32 h-32 sm:w-48 sm:h-48">
                        <motion.div
                            className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <Image
                            src="/cricshub.png"
                            alt="CricsHub Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_15px_rgba(56,182,255,0.5)]"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Enhanced title with more dynamic gradient */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-blue-600"
                    initial={{
                        backgroundPosition: '0% 50%',
                        opacity: 0,
                        y: -20
                    }}
                    animate={{
                        backgroundPosition: '100% 50%',
                        opacity: 1,
                        y: 0,
                        textShadow: [
                            '0 0 10px rgba(56, 182, 255, 0)',
                            '0 0 20px rgba(56, 182, 255, 0.7)',
                            '0 0 10px rgba(56, 182, 255, 0)'
                        ]
                    }}
                    transition={{
                        backgroundPosition: {
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        },
                        opacity: { duration: 0.8, delay: 0.4 },
                        y: { duration: 0.8, delay: 0.4 },
                        textShadow: {
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }
                    }}
                >
                    CricsHub
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-200 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    Revolutionizing <span className="text-blue-400 font-bold">Cricket</span> Experience Worldwide
                </motion.p>

                {/* Enhanced main card with more depth */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="relative bg-gray-900/70 backdrop-blur-lg rounded-xl p-6 sm:p-8 w-full max-w-md mx-auto mb-12 sm:mb-20 border border-gray-800 overflow-hidden shadow-2xl shadow-blue-900/20"
                >
                    {/* Animated border with gradient */}
                    <motion.div
                        className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <motion.div
                            className="absolute inset-0"
                            style={{
                                background: `conic-gradient(from 0deg at 50% 50%, rgba(56, 182, 255, 0), rgba(56, 182, 255, 0.8), rgba(56, 182, 255, 0))`
                            }}
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </motion.div>

                    {/* Inner glow */}
                    <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-900 backdrop-blur-md"></div>

                    <div className="relative z-10">
                        <motion.div
                            className="flex justify-center mb-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-400/20 px-4 py-1 rounded-full">
                                <RiLiveLine className="text-red-400 animate-pulse" />
                                <span className="text-sm font-medium text-blue-300">Live Preview</span>
                            </div>
                        </motion.div>

                        <motion.h3
                            className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1 }}
                        >
                            Coming <span className="text-blue-400">Soon</span>
                        </motion.h3>
                        <motion.p
                            className="mb-4 sm:mb-6 text-gray-400 text-sm sm:text-base"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            Launching in:
                        </motion.p>

                        <motion.div
                            className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6 sm:mb-8 font-mono"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                delay: 1.3,
                                type: "spring",
                                stiffness: 300
                            }}
                        >
                            {countdown || '00d 00h 00m'}
                        </motion.div>

                        {/* Enhanced buttons with platform icons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5 }}
                                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-4 py-3 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <SiAndroid className="text-xl text-white" />
                                <span>Android</span>
                                <FaArrowRight className="ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.6 }}
                                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-4 py-3 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 shadow-lg shadow-gray-500/20 hover:shadow-gray-500/30"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <SiApple className="text-xl text-white" />
                                <span>iOS</span>
                                <FaArrowRight className="ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>

                        {/* Email signup form with animation */}
                        <motion.div
                            className="mb-6 sm:mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.8 }}
                        >
                            <p className="text-sm text-gray-400 mb-2">Get notified when we launch</p>
                            <div className="flex gap-2">
                                <input
                                    ref={emailInputRef}
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    className="flex-1 bg-gray-800/50 border border-gray-700 focus:border-blue-500 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
                                    disabled={notifyStatus === 'submitting'}
                                />
                                <motion.button
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md ${notifyStatus === 'idle' ? 'bg-blue-600 hover:bg-blue-700' :
                                            notifyStatus === 'submitting' ? 'bg-blue-700' : 'bg-green-600'
                                        } text-white`}
                                    onClick={handleNotify}
                                    disabled={notifyStatus !== 'idle' || !email}
                                    whileHover={notifyStatus === 'idle' && email ? { scale: 1.05 } : {}}
                                    whileTap={notifyStatus === 'idle' && email ? { scale: 0.95 } : {}}
                                    animate={{
                                        scale: notifyStatus === 'success' ? [1, 1.1, 1] : 1,
                                        transition: notifyStatus === 'success' ? {
                                            duration: 0.5,
                                            times: [0, 0.5, 1]
                                        } : {}
                                    }}
                                >
                                    {notifyStatus === 'idle' && 'Notify Me'}
                                    {notifyStatus === 'submitting' && (
                                        <motion.span
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            Sending...
                                        </motion.span>
                                    )}
                                    {notifyStatus === 'success' && 'Done!'}
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Feature chips */}
                        <motion.div
                            className="mt-6 sm:mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                        >
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Featured In App</p>
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                {[
                                    { name: 'Live Streaming', icon: <FaBroadcastTower className="text-blue-400" /> },
                                    { name: 'Real-time Stats', icon: <FaChartLine className="text-blue-400" /> },
                                    { name: 'Fantasy Leagues', icon: <IoMdNotificationsOutline className="text-blue-400" /> },
                                    { name: 'Tournaments', icon: <FaTrophy className="text-blue-400" /> },
                                    { name: 'Player Profiles', icon: <RiLiveLine className="text-blue-400" /> }
                                ].map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-center gap-2 text-xs sm:text-sm bg-gray-800/50 hover:bg-gray-800/70 text-blue-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-blue-400/20 cursor-pointer transition-all"
                                        whileHover={{
                                            y: -2,
                                            boxShadow: '0 4px 8px rgba(56, 182, 255, 0.2)'
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {feature.icon}
                                        {feature.name}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Enhanced floating cricket elements with more animations */}
            <motion.div
                className="absolute bottom-12 left-8 w-12 h-12 sm:bottom-20 sm:left-20 sm:w-16 sm:h-16 z-0"
                initial={{ y: 0, rotate: 0 }}
                animate={{
                    y: [0, -20, 0],
                    rotate: 360,
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <motion.div
                    className="absolute inset-0 rounded-full bg-blue-500/10 blur-md"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <Image
                    src="/cricket-ball.png"
                    alt="Cricket Ball"
                    width={64}
                    height={64}
                    className="w-full h-full drop-shadow-[0_0_15px_rgba(56,182,255,0.7)]"
                />
            </motion.div>

            <motion.div
                className="absolute top-1/4 right-8 w-10 h-10 sm:right-20 sm:w-14 sm:h-14 z-0"
                initial={{ y: 0, rotate: 0 }}
                animate={{
                    y: [0, 15, 0],
                    rotate: 180,
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            >
                <motion.div
                    className="absolute inset-0 rounded-full bg-purple-500/10 blur-md"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
                <Image
                    src="/cricket-bat.png"
                    alt="Cricket Bat"
                    width={56}
                    height={56}
                    className="w-full h-full drop-shadow-[0_0_10px_rgba(124,58,237,0.5)]"
                />
            </motion.div>

            {/* Additional floating stumps element */}
            <motion.div
                className="absolute top-1/3 left-1/4 w-8 h-8 sm:w-12 sm:h-12 z-0"
                initial={{ y: 0, rotate: 0 }}
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
            >
                {/* <Image
                    src="/cricket-stumps.png"
                    alt="Cricket Stumps"
                    width={48}
                    height={48}
                    className="w-full h-full drop-shadow-[0_0_8px_rgba(56,182,255,0.4)]"
                /> */}
            </motion.div>

            {/* Stats counter animation */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <motion.div
                    className="flex gap-6 sm:gap-10 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 }}
                >
                    {[
                        { value: "10K+", label: "Pre-registrations" },
                        { value: "50+", label: "Countries" },
                        { value: "100+", label: "Leagues Covered" }
                    ].map((stat, i) => (
                        <div key={i} className="text-white">
                            <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2.4 + i * 0.2 }}
                                >
                                    {stat.value}
                                </motion.span>
                            </div>
                            <div className="text-xs sm:text-sm text-gray-400">
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2.5 + i * 0.2 }}
                                >
                                    {stat.label}
                                </motion.span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}