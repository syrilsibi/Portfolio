import { motion, useReducedMotion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experience } from '../data/experience';
import TimelineItem from '../components/TimelineItem';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, ease: 'easeOut' }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-2 bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
            💼 Experience
          </h2>
          <p className="text-slate-400 text-xs max-w-xl mx-auto">
            My professional journey and internships
          </p>
        </motion.div>

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
