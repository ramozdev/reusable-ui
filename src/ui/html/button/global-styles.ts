import { BORDER, ROUNDED } from "@/ui/globals";
import { twMerge } from "tailwind-merge";

export const globalButtonStyles = twMerge(
  `group
inline-flex
gap-2
select-none
items-center
justify-center
leading-none
transition
m-px
focus:outline-none
focus:ring-offset-2
focus:ring-offset-white
focus:ring-2`,
  ROUNDED,
  BORDER,
);
