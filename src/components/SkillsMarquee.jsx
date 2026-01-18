import { motion } from 'framer-motion';

const SkillsMarquee = ({ skills, direction = 'left', speed = 25 }) => {
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-deep-void to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-deep-void to-transparent z-10" />
      
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{
          x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-acid-lime/30 transition-colors duration-300 group"
          >
            <span className="text-xl group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
              {skill.name}
            </span>
            {skill.learning && (
              <span className="px-2 py-0.5 text-[9px] uppercase font-bold bg-acid-lime/20 text-acid-lime rounded-full">
                Learning
              </span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsMarquee;
