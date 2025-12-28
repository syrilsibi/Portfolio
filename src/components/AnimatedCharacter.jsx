import { motion, useReducedMotion } from 'framer-motion';

const AnimatedCharacter = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="relative w-full h-full mx-auto md:mx-0"
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: shouldReduceMotion ? 0.1 : 0.6, ease: 'easeOut' }}
    >
      {/* Simple SVG ML/Developer Character */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="charGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Floating background orb */}
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="url(#charGradient)"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Head */}
        <motion.circle
          cx="100"
          cy="80"
          r="25"
          fill="#06b6d4"
          animate={shouldReduceMotion ? {} : {
            y: [0, -5, 0],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Body (laptop/computer shape) */}
        <motion.rect
          x="70"
          y="105"
          width="60"
          height="40"
          rx="5"
          fill="#14b8a6"
          animate={shouldReduceMotion ? {} : {
            y: [0, -3, 0],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.1,
          }}
        />
        
        {/* Screen on laptop */}
        <rect
          x="75"
          y="110"
          width="50"
          height="30"
          rx="3"
          fill="#0b0f14"
        />
        
        {/* Code lines on screen */}
        <motion.line
          x1="85"
          y1="120"
          x2="115"
          y2="120"
          stroke="#06b6d4"
          strokeWidth="2"
          animate={shouldReduceMotion ? {} : {
            opacity: [0.3, 1, 0.3],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.line
          x1="85"
          y1="130"
          x2="105"
          y2="130"
          stroke="#14b8a6"
          strokeWidth="2"
          animate={shouldReduceMotion ? {} : {
            opacity: [0.3, 1, 0.3],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.3,
          }}
        />
        <motion.line
          x1="85"
          y1="140"
          x2="120"
          y2="140"
          stroke="#a855f7"
          strokeWidth="2"
          animate={shouldReduceMotion ? {} : {
            opacity: [0.3, 1, 0.3],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.6,
          }}
        />
        
        {/* Neural network nodes (small circles) */}
        <motion.circle
          cx="50"
          cy="100"
          r="4"
          fill="#06b6d4"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.circle
          cx="150"
          cy="100"
          r="4"
          fill="#14b8a6"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
        <motion.circle
          cx="100"
          cy="50"
          r="4"
          fill="#a855f7"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </svg>
    </motion.div>
  );
};

export default AnimatedCharacter;
