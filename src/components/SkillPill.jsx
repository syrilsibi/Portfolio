import { motion, useReducedMotion } from 'framer-motion';

const SkillPill = ({ skill, index, isCore = false }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { 
        y: -2,
        transition: { duration: 0.25, ease: 'easeOut' }
      }}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-200 group"
    >
      <span className="text-xs text-cyan-400/70 group-hover:text-cyan-400 transition-colors duration-200">
        {skill.icon}
      </span>
      <span className={`text-xs ${isCore ? 'text-slate-200' : 'text-slate-400'} group-hover:text-slate-200 transition-colors duration-200`}>
        {skill.name}
      </span>
      {skill.learning && (
        <span className="px-1 py-0.5 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full">
          Learning
        </span>
      )}
    </motion.div>
  );
};

export default SkillPill;
