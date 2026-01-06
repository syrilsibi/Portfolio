import { FaBriefcase, FaCertificate } from 'react-icons/fa';

const TimelineItem = ({ item, index }) => {
  const isInternship = item.type === 'internship';
  const Icon = isInternship ? FaBriefcase : FaCertificate;

  return (
    <div className="relative pl-4 sm:pl-5 pb-3 sm:pb-5 border-l border-white/5 last:border-0 last:pb-0">
      <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-deep-void border border-acid-lime flex items-center justify-center">
        <Icon className="w-1.5 h-1.5 text-acid-lime" />
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-2xl px-4 py-3 ml-2 hover:border-acid-lime/30 hover:bg-white/[0.04] transition-all duration-300">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-1.5">
          <h3 className="text-sm font-semibold text-slate-200">
            {item.title}
          </h3>
          {item.current && (
            <span className="px-2 py-0.5 text-[10px] uppercase font-bold bg-acid-lime/10 text-acid-lime rounded-sm border border-acid-lime/20 w-fit">
              Current
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-1.5">
          <p className="text-xs text-acid-lime font-mono">
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
    </div>
  );
};

export default TimelineItem;
