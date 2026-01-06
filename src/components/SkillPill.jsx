import { motion, useReducedMotion } from 'framer-motion';

const SkillPill = ({ skill, index, isCore = false }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : {
        y: -2,
        transition: { duration: 0.25, ease: 'easeOut' }
      }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 hover:border-acid-lime/50 hover:bg-white/10 transition-all duration-200 group"
    >
      <span className="text-xs text-slate-400 group-hover:text-acid-lime transition-colors duration-200">
        {skill.icon}
      </span>
      <span className={`text-xs ${isCore ? 'text-slate-200' : 'text-slate-400'} group-hover:text-white transition-colors duration-200 font-mono`}>
        {skill.name}
      </span>
      {skill.learning && (
        <span className="px-1.5 py-0.5 text-[10px] uppercase font-bold bg-acid-lime/10 text-acid-lime rounded-sm border border-acid-lime/20">
          Learning
        </span>
      )}
    </motion.div>
  );
};

export default SkillPill;
