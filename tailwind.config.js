/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueTheme: "#2e3b61",
        blueThemeLight: "#0088ff",
      }
    },
  },
  plugins: [],
};
