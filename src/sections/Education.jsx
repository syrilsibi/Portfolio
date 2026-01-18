import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { education } from '../data/education';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="education" className="py-16 md:py-28 px-4 sm:px-6 lg:px-8">
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
            Academic
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-slate-100">
            Education<span className="text-acid-lime">.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            My academic journey
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-4 md:space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-acid-lime/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-acid-lime/10 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <FaGraduationCap className="w-5 h-5 text-acid-lime" />
              </div>

              <div className="pr-16">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {item.degree}
                  </h3>
                  <span className="text-sm text-acid-lime font-mono">
                    {item.period}
                  </span>
                </div>

                <p className="text-base text-slate-300 font-medium mb-1">
                  {item.institution}
                </p>

                <p className="text-sm text-slate-500">
                  {item.university}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-acid-lime/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
