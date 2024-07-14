import typography from "@tailwindcss/typography";
import lineClamp from "@tailwindcss/line-clamp"


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography, lineClamp],
};
