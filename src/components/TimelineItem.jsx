import { motion, useReducedMotion } from 'framer-motion';
import { FaBriefcase, FaCertificate } from 'react-icons/fa';

const TimelineItem = ({ item, index }) => {
  const isInternship = item.type === 'internship';
  const Icon = isInternship ? FaBriefcase : FaCertificate;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: shouldReduceMotion ? 0.1 : 0.4, 
        ease: 'easeOut',
        delay: shouldReduceMotion ? 0 : index * 0.06 
      }}
      whileHover={shouldReduceMotion ? {} : { y: -2 }}
      className="relative pl-4 sm:pl-5 pb-3 sm:pb-5 border-l border-white/5 last:border-0 last:pb-0"
    >
      <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-[#0b0f14] border border-cyan-500/50 flex items-center justify-center">
        <Icon className="w-1.5 h-1.5 text-cyan-400/70" />
      </div>

      <div className="bg-white/5 border border-white/5 rounded-lg px-3 py-2 ml-0.5 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-1.5">
          <h3 className="text-sm font-semibold text-slate-200">
            {item.title}
          </h3>
          {item.current && (
            <span className="px-1.5 py-0.5 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full w-fit">
              Current
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-1.5">
          <p className="text-xs text-cyan-400/80 font-medium">
            {item.company || item.institution}
          </p>
          {item.location && (
            <>
              <span className="hidden sm:inline text-slate-500">•</span>
              <p className="text-xs text-slate-500">{item.location}</p>
            </>
          )}
        </div>

        <p className="text-xs text-slate-500 mb-1.5">{item.period}</p>
        
        {item.description && (
          <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;
