import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

const AnimatedCounter = ({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2,
  className = '' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  const numericValue = typeof value === 'string' 
    ? parseInt(value.replace(/\D/g, ''), 10) || 0 
    : value;

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        }
      });

      return () => controls.stop();
    }
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

export default AnimatedCounter;
