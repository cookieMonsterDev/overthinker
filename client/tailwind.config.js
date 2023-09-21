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
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
