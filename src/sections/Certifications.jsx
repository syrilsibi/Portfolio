import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { certifications } from '../data/certifications';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="certifications" className="py-16 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
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
            Achievements
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-slate-100">
            Certifications<span className="text-acid-lime">.</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-2xl p-5 hover:border-acid-lime/30 transition-all duration-300 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-acid-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="relative mb-4">
                <div className="w-10 h-10 rounded-xl bg-acid-lime/10 flex items-center justify-center group-hover:bg-acid-lime/20 transition-colors duration-300">
                  <FaCertificate className="w-4 h-4 text-acid-lime" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-base font-semibold text-slate-200 mb-2 group-hover:text-white transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-acid-lime font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-slate-500 font-mono">
                  {cert.period}
                </p>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-acid-lime/30 rounded-tr-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
