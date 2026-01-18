import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaFire, FaUtensils, FaShoppingCart, FaCar } from 'react-icons/fa';

// Icon mapping for projects
const projectIcons = {
  1: FaFire,
  2: FaUtensils,
  3: FaShoppingCart,
  4: FaCar,
};

const TimelineItem = ({ project, index, isLeft }) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], [isLeft ? -100 : 100, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const Icon = projectIcons[project.id] || FaFire;

  return (
    <div 
      ref={itemRef}
      className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content Card */}
      <motion.div
        style={{ opacity, x, scale }}
        className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}
      >
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative group"
        >
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-acid-lime/20 via-electric-indigo/20 to-acid-lime/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm group-hover:border-acid-lime/30 transition-all duration-300">
            {/* Project Icon & Title */}
            <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-acid-lime/20 to-electric-indigo/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-acid-lime" />
              </div>
              <div className={isLeft ? 'md:text-right' : ''}>
                <h3 className="text-xl font-display font-bold text-white group-hover:text-acid-lime transition-colors">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="inline-block mt-1 px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold bg-acid-lime/20 text-acid-lime rounded-full">
                    Featured
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className={`text-slate-400 text-sm leading-relaxed mb-4 ${isLeft ? 'md:text-right' : ''}`}>
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className={`flex flex-wrap gap-2 mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
              {project.techStack.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(204, 243, 129, 0.2)' }}
                  className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-slate-300 font-mono cursor-default transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Links */}
            <div className={`flex gap-3 ${isLeft ? 'md:justify-end' : ''}`}>
              {project.github && project.github !== '#' && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-acid-lime hover:border-acid-lime hover:text-deep-void transition-all duration-200 text-slate-400 text-sm"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Code</span>
                </motion.a>
              )}
              {project.demo && project.demo !== '#' && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-acid-lime hover:border-acid-lime hover:text-deep-void transition-all duration-200 text-slate-400 text-sm"
                >
                  <FaExternalLinkAlt className="w-3 h-3" />
                  <span>Demo</span>
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Timeline Node */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          className="relative"
        >
          {/* Outer ring */}
          <div className="w-6 h-6 rounded-full border-2 border-acid-lime/50 flex items-center justify-center bg-deep-void">
            {/* Inner dot */}
            <motion.div 
              className="w-3 h-3 rounded-full bg-acid-lime"
              animate={{ 
                boxShadow: ['0 0 0 0 rgba(204, 243, 129, 0.4)', '0 0 0 10px rgba(204, 243, 129, 0)', '0 0 0 0 rgba(204, 243, 129, 0)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          {/* Year badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-acid-lime/10 border border-acid-lime/20 rounded-full"
          >
            <span className="text-[10px] font-mono text-acid-lime whitespace-nowrap">
              {project.featured ? '2025' : '2024'}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Empty space for alignment */}
      <div className="hidden md:block flex-1" />
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="projects" className="py-16 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase text-acid-lime bg-acid-lime/10 rounded-full border border-acid-lime/20"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-slate-100">
            Projects<span className="text-acid-lime">.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            A journey through my featured projects in machine learning and full-stack development
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Animated Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            {/* Background line */}
            <div className="absolute inset-0 bg-white/10" />
            {/* Animated progress line */}
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-acid-lime via-electric-indigo to-acid-lime"
              style={{ height: lineHeight }}
            />
            {/* Glow effect */}
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-acid-lime via-electric-indigo to-acid-lime blur-sm"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-24">
            {projects.map((project, index) => (
              <TimelineItem 
                key={project.id} 
                project={project} 
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>

          {/* End marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex justify-center mt-16"
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-acid-lime to-electric-indigo" />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24"
        >
          <p className="text-slate-500 text-sm mb-4">Want to see more?</p>
          <motion.a
            href="https://github.com/syrilsibi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-slate-300 hover:border-acid-lime/50 hover:text-acid-lime transition-all duration-300"
          >
            <FaGithub className="w-5 h-5" />
            <span>View All on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
