import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { animations, plugins } from "./src/ui/animations-plugins";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/demos/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        brand: {
          50: "#fdf2fb",
          100: "#fce8f9",
          200: "#fbd0f3",
          300: "#f9a9e9",
          400: "#f471d6",
          500: "#ec46c2",
          600: "#db29a6",
          700: "#bf1887",
          800: "#9b175b",
          900: "#81184e",
          950: "#50072d",
        },
      },
      ...animations,
    },
  },
  plugins: [require("@tailwindcss/forms"), ...plugins],
} satisfies Config;
