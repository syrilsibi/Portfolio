import { motion, useReducedMotion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-8 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, ease: 'easeOut' }}
          className="text-center mb-6 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-1.5 md:mb-2 bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
            🚀 Projects
          </h2>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            Featured projects showcasing my work in machine learning and full-stack development
          </p>
        </motion.div>

        <div className="space-y-4 md:space-y-6">
          {/* Featured Project - Always First */}
          {featuredProject && (
            <ProjectCard project={featuredProject} featured={true} index={0} />
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <h3 className="text-xs font-medium tracking-widest uppercase text-slate-400">
                  Other Projects
                </h3>
                <div className="flex-1 h-px bg-white/5"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
                {otherProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    featured={false}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
