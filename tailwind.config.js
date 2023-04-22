/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        repeat4: "repeat(4, 250px)",
      },
    },
  },
  plugins: [],
};
