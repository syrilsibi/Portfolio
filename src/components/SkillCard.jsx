import { motion, useReducedMotion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : {
        y: -2,
        transition: { duration: 0.25, ease: 'easeOut' }
      }}
      className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/5 rounded-lg hover:border-acid-lime/50 hover:bg-white/10 transition-all duration-200 group"
    >
      <span className="text-sm text-slate-400 group-hover:text-acid-lime transition-colors duration-200">
        {skill.icon}
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="text-xs font-medium text-slate-200 group-hover:text-slate-100 transition-colors duration-200">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
};

export default SkillCard;
