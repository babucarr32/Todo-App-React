/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        100: "100%",
      },
      height: {
        "90vh": "80vh",
        100: "100%",
      },
      colors: {
        gray: "#171717",
      },
    },
  },
  plugins: [],
};
