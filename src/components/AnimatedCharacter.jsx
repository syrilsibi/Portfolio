import { useReducedMotion } from 'framer-motion';

const AnimatedCharacter = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full h-full mx-auto md:mx-0">
      {/* Simple SVG ML/Developer Character - Static for performance */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="charGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ccf381" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#4834d4" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Static background orb */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="url(#charGradient)"
          opacity="0.4"
        />

        {/* Head */}
        <circle
          cx="100"
          cy="80"
          r="25"
          fill="#ccf381"
        />

        {/* Body (laptop/computer shape) */}
        <rect
          x="70"
          y="105"
          width="60"
          height="40"
          rx="5"
          fill="#4834d4"
        />

        {/* Screen on laptop */}
        <rect
          x="75"
          y="110"
          width="50"
          height="30"
          rx="3"
          fill="#050505"
        />

        {/* Code lines on screen */}
        <line
          x1="85"
          y1="120"
          x2="115"
          y2="120"
          stroke="#ccf381"
          strokeWidth="2"
          opacity="0.8"
        />
        <line
          x1="85"
          y1="130"
          x2="105"
          y2="130"
          stroke="#ffffff"
          strokeWidth="2"
          opacity="0.8"
        />
        <line
          x1="85"
          y1="140"
          x2="120"
          y2="140"
          stroke="#4834d4"
          strokeWidth="2"
          opacity="0.8"
        />

        {/* Neural network nodes (small circles) */}
        <circle
          cx="50"
          cy="100"
          r="4"
          fill="#ccf381"
          opacity="0.7"
        />
        <circle
          cx="150"
          cy="100"
          r="4"
          fill="#4834d4"
          opacity="0.7"
        />
        <circle
          cx="100"
          cy="50"
          r="4"
          fill="#ffffff"
          opacity="0.7"
        />
      </svg>
    </div>
  );
};

export default AnimatedCharacter;
