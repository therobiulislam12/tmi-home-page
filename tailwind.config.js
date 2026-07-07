/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bright CTA accent — change this one value to re-theme the whole site.
        accent: {
          DEFAULT: "#F5992F",
          hover: "#e0851c",
        },
        ink: "#0a0a0a",
        panel: "#111114",
        // Pink used to highlight client/brand names.
        highlight: "#E85C7A",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Cinzel", "Georgia", "serif"],
        manrope: ["Manrope", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1340px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
    },
  },
  plugins: [],
};
