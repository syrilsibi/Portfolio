import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { personal } from '../data/personal';
import MagneticButton from '../components/MagneticButton';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="py-16 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-acid-lime/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase text-acid-lime bg-acid-lime/10 rounded-full border border-acid-lime/20"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-slate-100">
              Contact<span className="text-acid-lime">.</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects,
              or just having a conversation about machine learning and technology.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 mb-8"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Location */}
              <motion.div
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-acid-lime/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-acid-lime" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Location</div>
                  <div className="text-slate-200 font-medium">{personal.location}</div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.a
                href={`mailto:${personal.email}`}
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-acid-lime/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-acid-lime/10 flex items-center justify-center">
                  <FaEnvelope className="w-5 h-5 text-acid-lime" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email</div>
                  <div className="text-slate-200 font-medium text-sm">{personal.email}</div>
                </div>
              </motion.a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton
                href={`mailto:${personal.email}`}
                variant="primary"
                external
                icon={FaEnvelope}
              >
                Send Email
              </MagneticButton>
              <MagneticButton
                href={personal.linkedin}
                variant="secondary"
                external
                icon={FaLinkedin}
              >
                Connect on LinkedIn
              </MagneticButton>
            </div>
          </motion.div>

          {/* Response Time */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-slate-500 text-sm"
          >
            I typically respond within <span className="text-acid-lime">24-48 hours</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
