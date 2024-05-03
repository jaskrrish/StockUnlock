/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".snap-x": {
          "scroll-snap-type": "x mandatory",
        },
        ".scrolling-touch": {
          "-webkit-overflow-scrolling": "touch",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
