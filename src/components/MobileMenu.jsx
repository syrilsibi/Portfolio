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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.2 }}
            className="fixed inset-0 bg-deep-void/90 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'easeOut', duration: shouldReduceMotion ? 0.1 : 0.4 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-deep-void border-l border-white/10 z-50 overflow-hidden"
          >
            {/* Background Noise for consistency */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,...')] z-0"></div>

            <div className="relative z-10 flex flex-col h-full p-8">
              <button
                onClick={onClose}
                className="self-end p-2 rounded-full hover:bg-white/10 transition-colors mb-12"
                aria-label="Close menu"
              >
                <FaTimes className="w-6 h-6 text-slate-200" />
              </button>

              <nav className="flex flex-col gap-6">
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
                    transition={{ delay: shouldReduceMotion ? 0 : 0.1 + (index * 0.05), duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl font-display font-medium text-slate-300 hover:text-acid-lime transition-colors block tracking-tight"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto">
                <div className="h-px w-full bg-white/10 mb-6"></div>
                <p className="text-slate-500 text-sm font-body">© 2024 Syril Sibi</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
