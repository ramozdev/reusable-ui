import { cmdk } from "./cmdk/tailwind";
import { dropdownMenu } from "./radix/dropdown-menu/tailwind";
import { dialog } from "./radix/dialog/tailwind";
import { navigationMenu } from "./radix/navigation-menu/tailwind";
import { contextMenu } from "./radix/context-menu/tailwind";
import { menubar } from "./radix/menubar/tailwind";
import { accordion } from "./radix/accordion/tailwind";
import { toast } from "./radix/toast/tailwind";
import { tooltip } from "./radix/tooltip/tailwind";
import { popover } from "./radix/popover/tailwind";
import { hoverCard } from "./radix/hover-card/tailwind";
import { alertDialog } from "./radix/alert-dialog/tailwind";
import { type Config } from "tailwindcss";

const animations: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    ...cmdk?.keyframes,
    ...contextMenu?.keyframes,
    ...menubar?.keyframes,
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
    ...cmdk?.animation,
    ...contextMenu?.animation,
    ...menubar?.animation,
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
};

export { animations };
