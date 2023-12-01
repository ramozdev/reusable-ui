import { BORDER, ROUNDED } from "@/ui/globals";
import { twMerge } from "tailwind-merge";

export const globalButtonStyles = twMerge(
  `group
inline-flex
gap-2
select-none
items-center
justify-center
transition
font-medium
m-px
text-sm
leading-5
focus:outline-none
disabled:pointer-events-none
disabled:opacity-75
focus:ring-offset-2
focus:ring-offset-white
dark:focus:ring-offset-black
focus:ring-2`,
  ROUNDED,
  BORDER,
);
