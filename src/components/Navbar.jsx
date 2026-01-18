import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useMobileMenu } from '../hooks/useMobileMenu';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const { isOpen, toggle, close } = useMobileMenu();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          const sections = navItems.map(item => item.href.substring(1));
          const current = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });

          setActiveSection(current ? `#${current}` : '');
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  const handleNavClick = useCallback((href) => {
    close();
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }
  }, [close]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'py-3 bg-deep-void/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10'
            : 'py-5 bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="group font-display text-xl md:text-2xl font-bold text-slate-100 tracking-tighter relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10">SYRIL</span>
              <span className="text-acid-lime relative z-10">.</span>
              <motion.span 
                className="absolute -inset-2 bg-acid-lime/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"
                layoutId="logoHover"
              />
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.href} 
                  className="relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <motion.a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`
                      relative px-4 py-2 text-sm font-medium tracking-wide rounded-lg
                      transition-colors duration-300
                      ${activeSection === item.href
                        ? 'text-acid-lime'
                        : 'text-slate-400 hover:text-white'
                      }
                    `}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                    {activeSection === item.href && (
                      <motion.div
                        layoutId="activeNavBg"
                        className="absolute inset-0 bg-acid-lime/10 rounded-lg -z-10"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggle}
              className="lg:hidden p-2.5 rounded-xl text-slate-200 hover:text-acid-lime hover:bg-white/5 transition-all duration-300"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu isOpen={isOpen} onClose={close} navItems={navItems} />
    </>
  );
};

export default Navbar;
