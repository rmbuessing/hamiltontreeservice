/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'sm': '0.875rem', // Small
        'base': '1rem',   // Base
        'lg': '1.125rem', // Large
        'xl': '1.25rem',  // Extra Large
        '2xl': '1.5rem',  // 2 Extra Large
        // Add more font sizes as needed
      },
    },
  },
  variants: {},
  plugins: [],
};