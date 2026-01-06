import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experience } from '../data/experience';
import TimelineItem from '../components/TimelineItem';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="py-8 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-6 md:mb-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-1.5 md:mb-2 text-slate-100">
            EXPERIENCE<span className="text-acid-lime">.</span>
          </h2>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            My professional journey and internships
          </p>
        </div>

        <div className="relative">
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
