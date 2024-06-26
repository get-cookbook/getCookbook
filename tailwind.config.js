/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        ravioli: "url('./ravioli.jpeg')",
        pancake: "url('./pancake.jpg')",
        biryani: "url('./biryani.jpg')",
        jamun: "url('./gulabJamun.jpeg')",
        board: "url('./board.jpg')"
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
