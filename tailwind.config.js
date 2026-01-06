/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          cyan: '#06b6d4',
          teal: '#14b8a6',
          purple: '#a855f7',
        },
        'deep-void': '#050505',
        'acid-lime': '#ccf381',
        'electric-indigo': '#4834d4',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      animation: {
        'slow-fade': 'fadeIn 1.2s ease-out',
        'text-reveal': 'reveal 0.8s cubic-bezier(0.77, 0, 0.175, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        reveal: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
