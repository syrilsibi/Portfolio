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
            className="fixed inset-0 bg-[#0b0f14]/95 backdrop-blur-md z-40"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'easeOut', duration: shouldReduceMotion ? 0.1 : 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-slate-800/98 backdrop-blur-xl border-l border-white/10 z-50 shadow-2xl"
          >
            <div className="flex flex-col h-full p-6">
              <button
                onClick={onClose}
                className="self-end p-2 rounded-lg hover:bg-white/10 transition-colors mb-8 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <FaTimes className="w-6 h-6 text-slate-200" />
              </button>

              <nav className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: shouldReduceMotion ? 0 : index * 0.05, duration: shouldReduceMotion ? 0.1 : 0.3 }}
                    className="text-lg font-medium text-slate-200 hover:text-cyan-500 transition-colors py-3 min-h-[44px] flex items-center"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
