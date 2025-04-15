/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#2DAA9E",
        darkBlue: "#1A1A2E",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(45, 170, 158, 1) 0%, rgba(45, 170, 158, 1) 42%, rgba(31, 237, 186, 1) 100%);",
      },
    },
  },
  plugins: [],
};
