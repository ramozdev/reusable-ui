import { BORDER, ROUNDED } from "@/ui/globals";
import { twMerge } from "tailwind-merge";

export const globalBadgeStyles = twMerge(
  `whitespace-nowrap
inline
text-sm
px-2`,
  ROUNDED,
  BORDER,
);
