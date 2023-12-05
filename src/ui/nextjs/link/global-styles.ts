import { BORDER, ROUNDED } from "@/ui/globals";
import { twMerge } from "tailwind-merge";

export const globalLinkStyles = twMerge(
  `group
inline-flex
gap-2
select-none
items-center
justify-center
leading-none
m-px
focus:outline-none
disabled:pointer-events-none
disabled:opacity-75
focus-visible:ring-offset-2
focus-visible:ring-offset-white
dark:focus-visible:ring-offset-black
focus-visible:ring-2`,
  ROUNDED,
  BORDER,
);
