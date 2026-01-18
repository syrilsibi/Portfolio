import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedCounter from '../components/AnimatedCounter';
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaCode } from 'react-icons/fa';

const BentoCard = ({ children, className = '', delay = 0, span = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={`
      relative overflow-hidden rounded-3xl
      bg-gradient-to-br from-white/[0.07] to-white/[0.02]
      border border-white/10 hover:border-acid-lime/30
      transition-colors duration-300
      ${span}
      ${className}
    `}
  >
    {children}
  </motion.div>
);

const About = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const stats = [
    { value: 6, suffix: '+', label: 'Projects', icon: FaCode },
    { value: 1, suffix: '+', label: 'Year Exp', icon: FaBriefcase },
    { value: 5, suffix: '+', label: 'Technologies', icon: FaGraduationCap },
  ];

  return (
    <section id="about" className="py-16 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider uppercase text-acid-lime bg-acid-lime/10 rounded-full border border-acid-lime/20"
          >
            Introduction
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-100">
            About Me<span className="text-acid-lime">.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* Main Bio - Large Card */}
          <BentoCard span="md:col-span-2 lg:col-span-2 lg:row-span-2" delay={0.1}>
            <div className="p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-acid-lime/10 flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Syril Sibi</h3>
                  <p className="text-sm text-acid-lime">ML Engineer Intern</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm an MCA student with a passion for machine learning and artificial intelligence. 
                Currently working as a Machine Learning Engineer Intern at SkillPark, where I'm 
                applying my knowledge to real-world projects.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                I have hands-on experience with traditional ML algorithms including SVM, Logistic 
                Regression, and KNN. Currently expanding into deep learning with CNN and RNN architectures.
              </p>
              <div className="mt-auto pt-4 border-t border-white/5">
                <p className="text-sm text-slate-500">
                  Fascinated by how neural networks can learn complex patterns and solve challenging problems.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Location Card */}
          <BentoCard delay={0.2}>
            <div className="p-6 h-full flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-acid-lime/10 flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="w-5 h-5 text-acid-lime" />
              </div>
              <h3 className="text-sm font-medium text-slate-400 mb-1">Location</h3>
              <p className="text-xl font-semibold text-white">Idukki</p>
              <p className="text-slate-500">Kerala, India</p>
            </div>
          </BentoCard>

          {/* Current Focus Card */}
          <BentoCard delay={0.3}>
            <div className="p-6 h-full flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-electric-indigo/20 flex items-center justify-center mb-4">
                <span className="text-xl">🧠</span>
              </div>
              <h3 className="text-sm font-medium text-slate-400 mb-1">Current Focus</h3>
              <p className="text-lg font-semibold text-white">Deep Learning</p>
              <p className="text-sm text-slate-500">CNN & RNN</p>
            </div>
          </BentoCard>

          {/* Stats Cards */}
          {stats.map((stat, index) => (
            <BentoCard key={stat.label} delay={0.4 + index * 0.1}>
              <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 rounded-xl bg-acid-lime/10 flex items-center justify-center mb-3">
                  <stat.icon className="w-5 h-5 text-acid-lime" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-acid-lime mb-1">
                  <AnimatedCounter value={stat.value.toString()} suffix={stat.suffix} />
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            </BentoCard>
          ))}

          {/* Tech Stack Preview */}
          <BentoCard span="md:col-span-2 lg:col-span-1" delay={0.7}>
            <div className="p-6 h-full">
              <h3 className="text-sm font-medium text-slate-400 mb-4">Core Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Django', 'PyTorch', 'TensorFlow'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default About;
