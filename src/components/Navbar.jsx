import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-16 md:h-24 ${scrolled
            ? 'bg-deep-void/80 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="group font-display text-xl md:text-2xl font-bold text-slate-100 tracking-tighter"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              SYRIL<span className="text-acid-lime">.</span>
            </motion.a>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.href} className="relative">
                  <motion.a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`text-sm font-body tracking-wide transition-colors duration-300 ${activeSection === item.href
                        ? 'text-acid-lime'
                        : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    {item.label}
                  </motion.a>
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-acid-lime"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={toggle}
              className="lg:hidden p-2 text-slate-200 hover:text-acid-lime transition-colors"
              aria-label="Toggle menu"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu isOpen={isOpen} onClose={close} navItems={navItems} />
    </>
  );
};

export default Navbar;
