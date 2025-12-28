import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skills } from '../data/skills';
import SkillPill from '../components/SkillPill';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  // Pill-style categories (programming languages & ML algorithms)
  const pillCategories = [
    { 
      title: 'Programming Languages', 
      skills: skills.programmingLanguages,
      isCore: true 
    },
    { 
      title: 'Machine Learning', 
      skills: skills.machineLearning,
      isCore: true 
    },
    { 
      title: 'Deep Learning', 
      skills: skills.deepLearning,
      isCore: true 
    },
  ];

  // Card-style categories (frameworks & tools)
  const cardCategories = [
    { title: 'Frontend', skills: skills.frontend },
    { title: 'Backend', skills: skills.backend },
    { title: 'ML Libraries', skills: skills.mlLibraries },
    { title: 'Databases', skills: skills.databases },
    { title: 'Tools', skills: skills.tools },
    { title: 'Operating Systems', skills: skills.operatingSystems },
  ];

  return (
    <section id="skills" className="py-8 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-6 md:mb-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-1.5 md:mb-2 bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
            🛠️ Skills
          </h2>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="space-y-5 md:space-y-8">
          {/* Pill-style sections */}
          {pillCategories.map((category) => (
            <div
              key={category.title}
              className="space-y-1.5"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-1.5 md:mb-3">
                <h3 className="text-xs font-medium tracking-widest uppercase text-slate-400">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-white/5"></div>
              </div>
              <div className="flex flex-wrap gap-1">
                {category.skills.map((skill, index) => (
                  <SkillPill
                    key={skill.name}
                    skill={skill}
                    index={index}
                    isCore={category.isCore}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Card-style sections */}
          {cardCategories.map((category) => (
            <div
              key={category.title}
              className="space-y-1.5"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-1.5 md:mb-3">
                <h3 className="text-xs font-medium tracking-widest uppercase text-slate-400">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-white/5"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 md:gap-2">
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
