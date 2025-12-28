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
      },
    },
  },
  plugins: [],
}
