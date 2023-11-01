import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { animations } from "./src/ui/animations";
import { plugins } from "./src/ui/plugins";

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
      ...animations,
    },
  },
  plugins: [require("@tailwindcss/forms"), ...plugins],
} satisfies Config;
