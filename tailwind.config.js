/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        radialGradient:
          "linear-gradient(0deg, #061016 0%, #162029 40%, #162029 40%, #0D1317 100%)",
      }),
    },
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
        ".hide-scrollbar": {
          "::-webkit-scrollbar": {
            display: "none",
          },
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
