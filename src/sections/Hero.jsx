import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FaLinkedin, FaFileDownload } from 'react-icons/fa';
import Button from '../components/Button';
import AnimatedCharacter from '../components/AnimatedCharacter';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center overflow-hidden px-4 md:px-8">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-electric-indigo/20 blur-[120px] rounded-full mix-blend-screen opacity-40 animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-acid-lime/10 blur-[100px] rounded-full mix-blend-overlay opacity-30" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col justify-center h-full">
        {/* Role Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-3 mb-4 md:mb-8"
        >
          <span className="h-[1px] w-8 md:w-16 bg-acid-lime/60"></span>
          <span className="font-body text-acid-lime tracking-widest uppercase text-xs md:text-sm font-semibold">
            Machine Learning Engineer Intern
          </span>
        </motion.div>

        {/* MEGA TYPE */}
        <div className="relative leading-[0.85] tracking-tighter">
          <motion.h1
            style={{ y: shouldReduceMotion ? 0 : y1 }}
            className="font-display text-[15vw] md:text-[12vw] font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50"
          >
            SYRIL
          </motion.h1>
          <motion.h1
            style={{ y: shouldReduceMotion ? 0 : y2 }}
            className="font-display text-[15vw] md:text-[12vw] font-bold text-transparent bg-clip-text bg-gradient-to-br from-white/90 via-white/50 to-transparent ml-[8vw] md:ml-[12vw]"
          >
            SIBI
          </motion.h1>

          <div className="absolute top-1/2 right-4 md:right-20 transform -translate-y-1/2 hidden md:block">
            <AnimatedCharacter />
          </div>
        </div>

        {/* Introduction & CTA */}
        <div className="mt-8 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-body text-slate-400 text-sm md:text-lg max-w-xl leading-relaxed"
          >
            Building intelligent systems at the intersection of <span className="text-white font-medium">Django</span> and <span className="text-white font-medium">Deep Learning</span>.
            Designing digital experiences that feel intuitive and alive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="#projects" variant="primary" className="group">
              <span>Explore Work</span>
              <span className="group-hover:translate-x-1 transition-transform inline-block ml-1">→</span>
            </Button>
            <Button href="https://linkedin.com/in/syril-sibi-37a823261" variant="outline" external icon={FaLinkedin}>
              Connect
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/20"
      >
        <span className="block text-[10px] tracking-widest uppercase mb-2 text-center">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-acid-lime/0 via-acid-lime/50 to-acid-lime/0 mx-auto"></div>
      </motion.div>

    </section>
  );
};

export default Hero;
