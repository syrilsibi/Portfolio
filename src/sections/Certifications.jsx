import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { certifications } from '../data/certifications';

const Certifications = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="certifications" className="py-8 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-6 md:mb-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-1.5 md:mb-2 text-slate-100">
            CERTIFICATIONS<span className="text-acid-lime">.</span>
          </h2>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-2">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 hover:border-acid-lime/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-200 mb-1 group-hover:text-acid-lime transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium mb-0.5">
                {cert.issuer}
              </p>
              <p className="text-xs text-slate-500">
                {cert.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
