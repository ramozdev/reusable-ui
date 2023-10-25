import { BORDER, ROUNDED } from "@/ui/globals";
import { twMerge } from "tailwind-merge";

export const globalAnchorStyles = twMerge(
  `group
inline-flex
gap-2
select-none
items-center
justify-center
leading-none
m-px
focus:outline-none
focus-visible:ring-offset-2
focus-visible:ring-offset-white
focus-visible:ring-2`,
  ROUNDED,
  BORDER,
);
