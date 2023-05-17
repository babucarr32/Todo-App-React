/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        100: "100%",
        "80vh": "80vh",
        "70vh": "70vh",
        "60vh": "60vh",
      },
      height: {
        "90vh": "90vh",
        "80vh": "80vh",
        "70vh": "70vh",
        "60vh": "60vh",
        100: "100%",
      },
      colors: {
        gray: "#171717",
      },
    },
  },
  plugins: [],
};
