import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experience } from '../data/experience';
import TimelineItem from '../components/TimelineItem';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="py-16 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase text-acid-lime bg-acid-lime/10 rounded-full border border-acid-lime/20"
          >
            Career
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-slate-100">
            Experience<span className="text-acid-lime">.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            My professional journey and internships
          </p>
        </motion.div>

        {/* Timeline */}
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
