import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const MagneticButton = ({
  children,
  variant = 'primary',
  onClick,
  href,
  external = false,
  className = '',
  icon: Icon,
  strength = 0.3,
  ...props
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses = 'relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] text-sm focus:outline-none focus:ring-2 focus:ring-acid-lime/50 focus:ring-offset-2 focus:ring-offset-deep-void overflow-hidden';

  const variants = {
    primary: 'bg-acid-lime text-deep-void hover:shadow-lg hover:shadow-acid-lime/25',
    secondary: 'bg-white/5 text-slate-200 border border-white/10 hover:border-acid-lime/50 hover:text-acid-lime',
    outline: 'border border-white/20 text-slate-300 hover:border-acid-lime hover:text-acid-lime hover:bg-acid-lime/5',
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (href && !external) {
      e.preventDefault();
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
      }
    }
  };

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className="relative"
    >
      <MotionComponent
        href={external ? href : href ? '#' : undefined}
        onClick={handleClick}
        className={buttonClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 hover:opacity-100"
          initial={false}
          whileHover={{
            background: [
              'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            ],
            x: ['-100%', '100%'],
            transition: { duration: 0.6, ease: 'easeInOut' }
          }}
        />
        {Icon && <Icon className="w-4 h-4 relative z-10" />}
        <span className="relative z-10">{children}</span>
        {external && href && <FaExternalLinkAlt className="w-3 h-3 relative z-10" />}
      </MotionComponent>
    </motion.div>
  );
};

export default MagneticButton;
