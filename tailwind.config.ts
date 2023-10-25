import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { dropdownMenu } from "./src/ui/radix/dropdown-menu/tailwind";
import { dialog } from "./src/ui/radix/dialog/tailwind";
import {
  navigationMenu,
  navigationMenuPlugin,
} from "./src/ui/radix/navigation-menu/tailwind";
import { accordion } from "./src/ui/radix/accordion/tailwind";
import { toast } from "./src/ui/radix/toast/tailwind";
import { tooltip } from "./src/ui/radix/tooltip/tailwind";
import { popover } from "./src/ui/radix/popover/tailwind";
import { hoverCard } from "./src/ui/radix/hover-card/tailwind";
import { alertDialog } from "./src/ui/radix/alert-dialog/tailwind";

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
      keyframes: {
        ...dropdownMenu?.keyframes,
        ...dialog?.keyframes,
        ...navigationMenu?.keyframes,
        ...accordion?.keyframes,
        ...toast?.keyframes,
        ...hoverCard?.keyframes,
        ...tooltip?.keyframes,
        ...alertDialog?.keyframes,
        ...popover?.keyframes,
      },
      animation: {
        ...dropdownMenu?.animation,
        ...dialog?.animation,
        ...navigationMenu?.animation,
        ...accordion?.animation,
        ...toast?.animation,
        ...hoverCard?.animation,
        ...tooltip?.animation,
        ...alertDialog?.animation,
        ...popover?.animation,
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), ...navigationMenuPlugin],
} satisfies Config;
