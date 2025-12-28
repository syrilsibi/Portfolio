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
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
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

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((href) => {
    close();
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [close]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 h-16 md:h-20 ${
          scrolled ? 'bg-[#0b0f14]/60 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent cursor-pointer"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              Syril Sibi
            </motion.a>

            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === item.href
                      ? 'text-cyan-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/80 to-teal-500/80"
                      initial={false}
                      transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            <button
              onClick={toggle}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <FaBars className="w-6 h-6 text-slate-200" />
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu isOpen={isOpen} onClose={close} navItems={navItems} />
    </>
  );
};

export default Navbar;
