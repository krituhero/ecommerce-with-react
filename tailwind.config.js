/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      fontFamily: {
      roboto: ['Poppins', 'sans-serif'], // Add Roboto to the font family
    },
    },
  },
  plugins: [],
};
