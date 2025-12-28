import { motion, useReducedMotion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { personal } from '../data/personal';
import Button from '../components/Button';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="py-8 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-5 bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
            📬 Contact
          </h2>
          
          <p className="text-xs text-slate-400 mb-5 md:mb-6 leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about machine learning and technology. 
            Feel free to reach out!
          </p>

          <div className="mb-5 md:mb-6 space-y-1.5 md:space-y-2">
            <p className="text-xs text-slate-300">
              <span className="text-cyan-400/80">Location:</span> {personal.location}
            </p>
            <p className="text-xs text-slate-300">
              <span className="text-cyan-400/80">Email:</span>{' '}
              <a 
                href={`mailto:${personal.email}`}
                className="text-cyan-400/80 hover:text-cyan-400 transition-colors duration-200"
              >
                {personal.email}
              </a>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
            <Button
              href={`mailto:${personal.email}`}
              variant="primary"
              external
              icon={FaEnvelope}
              className="w-full sm:w-auto"
            >
              Send Email
            </Button>
            <Button
              href={personal.linkedin}
              variant="secondary"
              external
              icon={FaLinkedin}
              className="w-full sm:w-auto"
            >
              Connect on LinkedIn
            </Button>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: shouldReduceMotion ? 0 : 0.3, duration: shouldReduceMotion ? 0.1 : 0.4 }}
            className="text-slate-500 mt-6 md:mt-8 text-xs"
          >
            I typically respond within 24-48 hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
