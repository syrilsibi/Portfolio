import { motion, useReducedMotion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Button = ({
  children,
  variant = 'primary',
  onClick,
  href,
  external = false,
  className = '',
  icon: Icon,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  const baseClasses = 'px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px] text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-[#0b0f14]';

  const variants = {
    primary: 'bg-acid-lime text-deep-void hover:bg-white hover:text-black font-semibold tracking-wide',
    secondary: 'bg-white/5 text-slate-200 border border-white/10 hover:border-acid-lime/50 hover:text-acid-lime hover:bg-white/5',
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

  const motionProps = {
    onClick: handleClick,
    className: buttonClasses,
    whileHover: shouldReduceMotion ? {} : { y: -1 },
    whileTap: { y: 0 },
    transition: { type: 'easeOut', duration: 0.25 },
    ...props,
  };

  if (href) {
    return (
      <motion.a
        href={external ? href : '#'}
        {...motionProps}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {children}
        {external && href && <FaExternalLinkAlt className="w-3 h-3" />}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...motionProps}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </motion.button>
  );
};

export default Button;
