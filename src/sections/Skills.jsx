import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skills } from '../data/skills';
import SkillsMarquee from '../components/SkillsMarquee';

const FloatingSkill = ({ skill, index, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay + index * 0.05, duration: 0.5 }}
      whileHover={{ 
        scale: 1.05, 
        y: -3,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <div className="
        relative flex items-center gap-2.5 px-4 py-2.5 rounded-2xl cursor-pointer
        bg-gradient-to-br from-white/[0.08] to-white/[0.02]
        backdrop-blur-sm border border-white/10
        hover:border-acid-lime/40 hover:from-acid-lime/10 hover:to-transparent
        transition-all duration-300
        shadow-lg shadow-black/20
      ">
        <span className="text-xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
          {skill.name}
        </span>
        {skill.learning && (
          <motion.span 
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="px-2 py-0.5 text-[9px] uppercase font-bold bg-acid-lime/20 text-acid-lime rounded-full border border-acid-lime/30"
          >
            Learning
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ title, skills: categorySkills, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        <motion.div 
          className="h-1.5 w-1.5 rounded-full bg-acid-lime"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-400">
          {title}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
      </div>
      <div className="flex flex-wrap gap-2">
        {categorySkills.map((skill, index) => (
          <FloatingSkill key={skill.name} skill={skill} index={index} delay={delay} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  // All skills for marquee
  const allCoreSkills = [
    ...skills.programmingLanguages,
    ...skills.machineLearning,
    ...skills.deepLearning,
  ];

  const allToolsSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.mlLibraries,
    ...skills.databases,
    ...skills.tools,
  ];

  const categories = [
    { title: 'Frontend Development', skills: skills.frontend, delay: 0 },
    { title: 'Backend Development', skills: skills.backend, delay: 0.1 },
    { title: 'ML Libraries', skills: skills.mlLibraries, delay: 0.2 },
    { title: 'Databases', skills: skills.databases, delay: 0.3 },
    { title: 'Developer Tools', skills: skills.tools, delay: 0.4 },
    { title: 'Operating Systems', skills: skills.operatingSystems, delay: 0.5 },
  ];

  return (
    <section id="skills" className="py-16 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase text-acid-lime bg-acid-lime/10 rounded-full border border-acid-lime/20"
          >
            Technical Expertise
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-slate-100">
            Skills<span className="text-acid-lime">.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Core Skills Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-center text-xs font-medium tracking-wider uppercase text-slate-500 mb-4">
            Core Technologies
          </h3>
          <SkillsMarquee skills={allCoreSkills} direction="left" speed={30} />
        </motion.div>

        {/* Tools Marquee - Opposite Direction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <SkillsMarquee skills={allToolsSkills} direction="right" speed={35} />
        </motion.div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {categories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              delay={category.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
