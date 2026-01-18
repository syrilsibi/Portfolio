import { motion } from 'framer-motion';
import { FaBriefcase, FaCertificate } from 'react-icons/fa';

const TimelineItem = ({ item, index }) => {
  const isInternship = item.type === 'internship';
  const Icon = isInternship ? FaBriefcase : FaCertificate;

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative pl-6 sm:pl-8 pb-8 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-acid-lime/50 via-white/10 to-transparent" />
      
      {/* Timeline Dot */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 300 }}
        className="absolute -left-[9px] top-0 w-[18px] h-[18px] rounded-full bg-deep-void border-2 border-acid-lime flex items-center justify-center shadow-lg shadow-acid-lime/20"
      >
        <Icon className="w-2 h-2 text-acid-lime" />
      </motion.div>

      {/* Content Card */}
      <motion.div 
        whileHover={{ x: 5, transition: { duration: 0.2 } }}
        className="group bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-2xl px-5 py-4 hover:border-acid-lime/30 transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <h3 className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
            {item.title}
          </h3>
          {item.current && (
            <motion.span 
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-3 py-1 text-[10px] uppercase font-bold bg-acid-lime/20 text-acid-lime rounded-full border border-acid-lime/30 w-fit flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 bg-acid-lime rounded-full" />
              Current
            </motion.span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 mb-2">
          <p className="text-sm text-acid-lime font-medium">
            {item.company || item.institution}
          </p>
          {item.location && (
            <>
              <span className="hidden sm:inline text-slate-600">|</span>
              <p className="text-sm text-slate-500">{item.location}</p>
            </>
          )}
        </div>

        <p className="text-xs text-slate-500 mb-3 font-mono">{item.period}</p>

        {item.description && (
          <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;
