/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui/src";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [daisyui],
};
