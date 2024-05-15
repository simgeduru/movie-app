/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sedan: ["Sedan SC", "serif"],
        roboto: ["Roboto Serif", "serif"],
      },
      colors: {
        bordo: "#9D0208",
        back: "#03071E",
        txt: "#FFBA08",
        txt2: "#F48C06",
      },
      height: {
        "11/12": "90%",
      },
    },
  },
  plugins: [],
};
