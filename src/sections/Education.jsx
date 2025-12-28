import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { education } from '../data/education';

const Education = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="education" className="py-8 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-6 md:mb-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-1.5 md:mb-2 bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
            🎓 Education
          </h2>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            My academic journey
          </p>
        </div>

        <div className="space-y-2 md:space-y-3">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/5 rounded-lg px-3 py-2 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-1.5">
                <h3 className="text-sm font-semibold text-slate-200">
                  {item.degree}
                </h3>
                <span className="text-xs text-cyan-400/80 font-medium">
                  {item.period}
                </span>
              </div>
              
              <p className="text-xs text-cyan-400/80 font-medium mb-1">
                {item.institution}
              </p>
              
              <p className="text-xs text-slate-500">
                {item.university}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
