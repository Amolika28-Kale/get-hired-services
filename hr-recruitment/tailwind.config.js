/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        floatRotate: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(12deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "float-rotate": "floatRotate 10s ease-in-out infinite",
        "slide-in": "slideIn 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
