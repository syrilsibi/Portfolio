import { motion, useReducedMotion } from 'framer-motion';
import { FaLinkedin, FaFileDownload } from 'react-icons/fa';
import Button from '../components/Button';
import AnimatedCharacter from '../components/AnimatedCharacter';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs - ultra-light ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : {
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Content - Mobile-first optimized */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-8 md:pb-20">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-center md:justify-between md:gap-12">
          {/* Text Content - Mobile optimized */}
          <div className="flex-1 text-center md:text-left w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-3 md:mb-6"
              >
                <span className="block text-slate-200">Hi, I'm Syril 👋</span>
                <span className="block bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent mt-1 md:mt-2">Syril Sibi</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-400 mb-2 md:mb-4 font-medium"
              >
                Machine Learning Engineer Intern 🤖
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base md:text-lg text-slate-400 mb-6 md:mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed"
              >
                Building intelligent systems with Python, Django & Deep Learning 🧠
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-2.5 w-full sm:flex-row sm:justify-center md:justify-start sm:w-auto"
              >
                <Button
                  href="#projects"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  🚀 View Projects
                </Button>
                <Button
                  href="https://linkedin.com/in/syril-sibi-37a823261"
                  variant="secondary"
                  external
                  icon={FaLinkedin}
                  className="w-full sm:w-auto"
                >
                  💼 LinkedIn
                </Button>
                <Button
                  href="#"
                  variant="outline"
                  external
                  icon={FaFileDownload}
                  className="w-full sm:w-auto"
                >
                  📄 Resume
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Animated Character - Below on mobile, side on desktop */}
          <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto order-first md:order-last">
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80">
              <AnimatedCharacter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
