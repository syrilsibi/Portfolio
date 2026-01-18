import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const MobileMenu = ({ isOpen, onClose, navItems }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleNavClick = (href) => {
    onClose();
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
            className="fixed inset-0 bg-deep-void/90 backdrop-blur-md z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-gradient-to-b from-deep-void via-deep-void to-deep-void/95 border-l border-white/10 z-50 overflow-hidden"
          >
            {/* Decorative Glow */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-acid-lime/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-electric-indigo/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full p-8">
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ delay: 0.1 }}
                className="self-end p-3 rounded-xl hover:bg-white/10 transition-colors mb-12 group"
                aria-label="Close menu"
              >
                <FaTimes className="w-6 h-6 text-slate-400 group-hover:text-acid-lime transition-colors" />
              </motion.button>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: shouldReduceMotion ? 0 : 0.1 + (index * 0.05), 
                      duration: 0.4, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    className="group relative py-4 px-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-px bg-white/20 group-hover:w-12 group-hover:bg-acid-lime transition-all duration-300" />
                      <span className="text-3xl font-display font-medium text-slate-300 group-hover:text-white transition-colors tracking-tight">
                        {item.label}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </nav>

              {/* Footer */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-auto"
              >
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
                <p className="text-slate-500 text-sm font-body text-center">
                  Built with <span className="text-acid-lime">React</span> & <span className="text-acid-lime">Framer Motion</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
