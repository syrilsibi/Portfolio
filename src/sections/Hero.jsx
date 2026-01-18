import { motion, useReducedMotion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import MagneticButton from '../components/MagneticButton';
import Typewriter from '../components/Typewriter';

const GlowingOrb = ({ size, color, position, delay, duration }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ 
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.2, 1],
      x: [0, 30, 0],
      y: [0, -20, 0],
    }}
    transition={{
      duration: duration || 8,
      delay: delay || 0,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={`absolute ${position} ${size} ${color} rounded-full blur-3xl pointer-events-none`}
  />
);

const FloatingParticle = ({ delay, duration, x, y }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0, 1, 0],
      y: [y, y - 100],
      x: [x, x + (Math.random() - 0.5) * 50],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
    className="absolute w-1 h-1 bg-acid-lime/60 rounded-full"
  />
);

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  const [particles] = useState(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100 + 50,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }))
  );

  const roles = [
    "Machine Learning Engineer",
    "Deep Learning Enthusiast", 
    "Django Developer",
    "AI Researcher"
  ];

  return (
    <section 
      id="hero" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-4 md:px-8"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <GlowingOrb 
          size="w-[600px] h-[600px]" 
          color="bg-electric-indigo/30" 
          position="top-[-20%] right-[-10%]"
          duration={10}
        />
        <GlowingOrb 
          size="w-[500px] h-[500px]" 
          color="bg-acid-lime/20" 
          position="bottom-[-10%] left-[-10%]"
          delay={2}
          duration={12}
        />
        <GlowingOrb 
          size="w-[300px] h-[300px]" 
          color="bg-accent-purple/20" 
          position="top-[40%] left-[20%]"
          delay={4}
          duration={8}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating Particles */}
        {particles.map((p) => (
          <FloatingParticle key={p.id} {...p} />
        ))}
      </div>

      <motion.div 
        style={{ opacity, rotateX: shouldReduceMotion ? 0 : rotateX, rotateY: shouldReduceMotion ? 0 : rotateY }}
        className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col justify-center h-full perspective-1000"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-3 mb-6 md:mb-10"
        >
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-acid-lime rounded-full shadow-lg shadow-acid-lime/50"
          />
          <span className="font-body text-acid-lime tracking-widest uppercase text-xs md:text-sm font-semibold">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main Typography */}
        <div className="relative mb-8 md:mb-12">
          <motion.div
            style={{ y: shouldReduceMotion ? 0 : y1 }}
            className="overflow-hidden"
          >
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-display text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter"
            >
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                SYRIL
              </span>
            </motion.h1>
          </motion.div>
          
          <motion.div
            style={{ y: shouldReduceMotion ? 0 : y2 }}
            className="overflow-hidden ml-[5vw] md:ml-[10vw]"
          >
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-display text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter"
            >
              <span className="bg-gradient-to-r from-acid-lime via-acid-lime/80 to-electric-indigo bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                SIBI
              </span>
            </motion.h1>
          </motion.div>

          {/* Typewriter Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-6 md:mt-8"
          >
            <span className="text-slate-400 text-lg md:text-xl">I'm a </span>
            <Typewriter 
              words={roles}
              typingSpeed={80}
              deletingSpeed={40}
              delayBetweenWords={2500}
              className="text-lg md:text-xl font-semibold text-white"
            />
          </motion.div>
        </div>

        {/* Description & CTAs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="font-body text-slate-400 text-base md:text-lg leading-relaxed mb-2">
              Building intelligent systems at the intersection of
            </p>
            <p className="font-body text-lg md:text-xl leading-relaxed">
              <span className="text-white font-semibold">Django</span>
              <span className="text-slate-400"> and </span>
              <span className="text-white font-semibold">Deep Learning</span>
              <span className="text-acid-lime">.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton href="#projects" variant="primary">
              <span>View Projects</span>
              <motion.span 
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </MagneticButton>
            <MagneticButton href="https://linkedin.com/in/syril-sibi-37a823261" variant="outline" external icon={FaLinkedin}>
              Connect
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-slate-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 8] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-acid-lime rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
