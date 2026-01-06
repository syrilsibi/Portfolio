import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, featured = false, index = 0 }) => {
  return (
    <div
      className={`bg-white/[0.02] border border-white/5 rounded-2xl px-5 py-5 hover:border-acid-lime/50 hover:bg-white/[0.04] transition-all duration-300 group ${featured ? 'md:col-span-2 lg:col-span-2' : ''
        }`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className={`font-display font-semibold text-slate-100 group-hover:text-acid-lime transition-colors ${featured ? 'text-xl' : 'text-lg'}`}>
          {project.title}
        </h3>
        {featured && (
          <span className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-acid-lime/10 text-acid-lime rounded-sm border border-acid-lime/20 whitespace-nowrap">
            Featured
          </span>
        )}
      </div>

      <p className="text-sm text-slate-400 mb-4 leading-relaxed font-body">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs bg-white/5 border border-white/5 rounded-md text-slate-400 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-acid-lime hover:text-deep-void transition-all duration-200 text-slate-400"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="w-5 h-5" />
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-acid-lime hover:text-deep-void transition-all duration-200 text-slate-400"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
