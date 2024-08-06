/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        fantasy: {
          ...require("daisyui/src/theming/themes")["fantasy"],
          secondary: "#7F669D",
          accent: "#FFA62F",
        },
      },
      "dim",
    ],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      md: "680px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
