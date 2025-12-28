import { motion, useReducedMotion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, featured = false, index = 0 }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.4, 
        ease: 'easeOut',
        delay: index * 0.05 
      }}
      whileHover={shouldReduceMotion ? {} : { 
        y: -2,
        transition: { duration: 0.25, ease: 'easeOut' }
      }}
      className={`bg-white/5 border border-white/5 rounded-lg px-3 py-2 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-200 group ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className={`font-semibold text-slate-200 ${featured ? 'text-base' : 'text-sm'}`}>
          {project.title}
        </h3>
        {featured && (
          <span className="px-1.5 py-0.5 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full whitespace-nowrap">
            ⭐ Featured
          </span>
        )}
      </div>

      <p className="text-xs text-slate-400 mb-2 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-2">
        {project.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="px-1.5 py-0.5 text-xs bg-white/5 border border-white/5 rounded-full text-slate-500"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-1.5">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded hover:bg-white/10 transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="w-3.5 h-3.5 text-slate-500 hover:text-cyan-400 transition-colors duration-200" />
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded hover:bg-white/10 transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt className="w-3.5 h-3.5 text-slate-500 hover:text-cyan-400 transition-colors duration-200" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
