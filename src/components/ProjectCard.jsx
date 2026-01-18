import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, featured = false, index = 0 }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`
        relative group cursor-pointer perspective-1000
        ${featured ? 'md:col-span-2 lg:col-span-2' : ''}
      `}
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{
          background: 'linear-gradient(135deg, rgba(204, 243, 129, 0.2), rgba(72, 52, 212, 0.2))',
        }}
      />
      
      {/* Card Content */}
      <div 
        className={`
          relative h-full
          bg-gradient-to-br from-white/[0.05] to-white/[0.02]
          border border-white/10 rounded-2xl
          px-6 py-6
          group-hover:border-acid-lime/30
          transition-colors duration-300
          overflow-hidden
        `}
        style={{ transform: 'translateZ(20px)' }}
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)',
              animation: 'shimmer 2s linear infinite',
            }}
          />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <motion.h3 
            className={`
              font-display font-bold text-slate-100 
              group-hover:text-acid-lime transition-colors duration-300
              ${featured ? 'text-2xl' : 'text-xl'}
            `}
            style={{ transform: 'translateZ(30px)' }}
          >
            {project.title}
          </motion.h3>
          {featured && (
            <motion.span 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="
                flex-shrink-0 px-3 py-1.5 
                text-[10px] uppercase tracking-wider font-bold 
                bg-gradient-to-r from-acid-lime/20 to-acid-lime/10 
                text-acid-lime rounded-full 
                border border-acid-lime/30
              "
            >
              Featured
            </motion.span>
          )}
        </div>

        {/* Description */}
        <p 
          className={`
            text-slate-400 mb-5 leading-relaxed font-body
            ${featured ? 'text-base' : 'text-sm'}
          `}
          style={{ transform: 'translateZ(25px)' }}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5" style={{ transform: 'translateZ(25px)' }}>
          {project.techStack.map((tech, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.05 }}
              className="
                px-2.5 py-1 text-xs 
                bg-white/5 border border-white/10 
                rounded-lg text-slate-400 font-mono
                group-hover:border-white/20 group-hover:text-slate-300
                transition-all duration-300
              "
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3" style={{ transform: 'translateZ(30px)' }}>
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="
                p-2.5 rounded-xl 
                bg-white/5 border border-white/10
                hover:bg-acid-lime hover:border-acid-lime hover:text-deep-void 
                transition-all duration-200 text-slate-400
              "
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="
                p-2.5 rounded-xl 
                bg-white/5 border border-white/10
                hover:bg-acid-lime hover:border-acid-lime hover:text-deep-void 
                transition-all duration-200 text-slate-400
              "
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </motion.a>
          )}
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-acid-lime/30 rounded-tr-xl" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
