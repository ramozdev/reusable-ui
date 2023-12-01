import { BORDER, ROUNDED } from "@/ui/globals";
import { twMerge } from "tailwind-merge";

export const globalAnchorStyles = twMerge(
  `group
inline-flex
gap-2
select-none
items-center
justify-center
m-px
text-sm
leading-5
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
