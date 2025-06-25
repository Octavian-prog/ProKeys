// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neonCyan: "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff",
        neonReddit: "0 0 5px #FF4500, 0 0 10px #FF4500, 0 0 20px #FF4500, 0 0 40px #FF4500",
      },
      textShadow: {
        neonCyan: "0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff",
        neonReddit: "0 0 5px #FF4500, 0 0 10px #FF4500, 0 0 20px #FF4500, 0 0 40px #FF4500",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
  ],
}