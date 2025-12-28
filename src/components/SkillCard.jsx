import { motion, useReducedMotion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        ease: 'easeOut',
        delay: index * 0.03 
      }}
      whileHover={shouldReduceMotion ? {} : { 
        y: -2,
        transition: { duration: 0.25, ease: 'easeOut' }
      }}
      className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/5 rounded-lg hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-200 group"
    >
      <span className="text-sm text-cyan-400/70 group-hover:text-cyan-400 transition-colors duration-200">
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
