/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(0, 0, 0)",
        light_primary: "rgba(0, 0, 0, 0.75)",
        ultra_light_primary: "rgba(0, 0, 0, 0.15)",
        secondary: "rgb(255, 255, 255)",
        success: "rgb(26, 137, 23)",
        dark_success: "rgb(18, 96, 15)",
        light_success: "rgba(27, 137, 23, 0.75)",
        error: "rgb(201, 74, 74)",
        dark_error: "rgb(152, 55, 55)",
        light_error: "rgba(201, 74, 74, 0.75)",
        border: "rgb(204, 204, 204)",
      },
      keyframes: {
        shaking: {
          "0%": {
            transform: "translateX(0)",
          },
          "25%": {
            transform: "translateX(5px)",
          },
          "50%": {
            transform: "translateX(-5px)",
          },
          "75%": {
            transform: "translateX(5px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        fade: {
          "0%": {
            opacity: "0",
          },
          "25%": {
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "horizontal-shaking": "shaking 300ms",
        "fade-cubic": "300ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s 1 normal forwards running fade",
      },
    },
    fontFamily: {
      chomsky: ["Chomsky", "sans-serif"],
    },
    container: {
      center: true,
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".inline-size-full-overflow-wrap-break": {
          "inline-size": "100%",
          "overflow-wrap": "break-word",
        },
      };

      addUtilities(newUtilities);
    },
    function ({ addUtilities }) {
      const newUtilities = {
        ".all-unset": {
          all: "unset",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
