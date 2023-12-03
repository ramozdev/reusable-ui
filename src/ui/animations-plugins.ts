import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const animations: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    // ACCORDION
    "accordion-slide-down": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-slide-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0" },
    },
    // ALERT DIALOG
    "alert-dialog-overlay-show": {
      from: { opacity: "0" },
      to: { opacity: "1" },
    },
    "alert-dialog-content-show": {
      from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
      to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
    },
    // CONTEXT MENU
    "context-menu-slide-down-and-fade": {
      from: { opacity: "0", transform: "translateY(-2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "context-menu-slide-left-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "context-menu-slide-up-and-fade": {
      from: { opacity: "0", transform: "translateY(2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "context-menu-slide-right-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    // DIALOG
    "dialog-overlay-show": {
      from: { opacity: "0" },
      to: { opacity: "1" },
    },
    "dialog-content-show": {
      from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
      to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
    },
    // DROPDOWN MENU
    "dropdown-menu-slide-down-and-fade": {
      from: { opacity: "0", transform: "translateY(-2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "dropdown-menu-slide-left-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "dropdown-menu-slide-up-and-fade": {
      from: { opacity: "0", transform: "translateY(2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "dropdown-menu-slide-right-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    // HOVER CARD
    "hover-card-slide-down-and-fade": {
      from: { opacity: "0", transform: "translateY(-2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "hover-card-slide-left-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "hover-card-slide-up-and-fade": {
      from: { opacity: "0", transform: "translateY(2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "hover-card-slide-right-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    // MENUBAR
    "menubar-slide-down-and-fade": {
      from: { opacity: "0", transform: "translateY(-2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "menubar-slide-left-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "menubar-slide-up-and-fade": {
      from: { opacity: "0", transform: "translateY(2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "menubar-slide-right-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    // NAVIGATION MENU
    "navigation-menu-enter-from-right": {
      from: { opacity: "0", transform: "translateX(200px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "navigation-menu-enter-from-left": {
      from: { opacity: "0", transform: "translateX(-200px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "navigation-menu-exit-to-right": {
      from: { opacity: "1", transform: "translateX(0)" },
      to: { opacity: "0", transform: "translateX(200px)" },
    },
    "navigation-menu-exit-to-left": {
      from: { opacity: "1", transform: "translateX(0)" },
      to: { opacity: "0", transform: "translateX(-200px)" },
    },
    "navigation-menu-scale-in": {
      from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
      to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
    },
    "navigation-menu-scale-out": {
      from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
      to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
    },
    "navigation-menu-fade-in": {
      from: { opacity: "0" },
      to: { opacity: "1" },
    },
    "navigation-menu-fade-out": {
      from: { opacity: "1" },
      to: { opacity: "0" },
    },
    // POPOVER
    "popover-slide-down-and-fade": {
      from: { opacity: "0", transform: "translateY(-2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "popover-slide-left-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "popover-slide-up-and-fade": {
      from: { opacity: "0", transform: "translateY(2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "popover-slide-right-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    // TOAST
    "toast-hide": {
      from: { opacity: "1" },
      to: { opacity: "0" },
    },
    "toast-slide-in": {
      from: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
      to: { transform: "translateX(0))" },
    },
    "toast-swipe-out": {
      from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
      to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
    },
    // TOOLTIP
    "tooltip-slide-down-and-fade": {
      from: { opacity: "0", transform: "translateY(-2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "tooltip-slide-left-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    "tooltip-slide-up-and-fade": {
      from: { opacity: "0", transform: "translateY(2px)" },
      to: { opacity: "1", transform: "translateY(0)" },
    },
    "tooltip-slide-right-and-fade": {
      from: { opacity: "0", transform: "translateX(2px)" },
      to: { opacity: "1", transform: "translateX(0)" },
    },
    // -------------------
    // CMDK
    "cmdk-overlay-show": {
      from: { opacity: "0" },
      to: { opacity: "1" },
    },
    "cmdk-content-show": {
      from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
      to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
    },
  },
  animation: {
    // ACCORDION
    "accordion-slide-down":
      "accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    "accordion-slide-up":
      "accordion-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)",
    // ALERT DIALOG
    "alert-dialog-overlay-show":
      "alert-dialog-overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    "alert-dialog-content-show":
      "alert-dialog-content-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    // CONTEXT MENU
    "context-menu-slide-down-and-fade":
      "context-menu-slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "context-menu-slide-left-and-fade":
      "context-menu-slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "context-menu-slide-up-and-fade":
      "context-menu-slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "context-menu-slide-right-and-fade":
      "context-menu-slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    // DIALOG
    "dialog-overlay-show":
      "dialog-overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    "dialog-content-show":
      "dialog-content-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    // DROPDOWN MENU
    "dropdown-menu-slide-down-and-fade":
      "dropdown-menu-slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "dropdown-menu-slide-left-and-fade":
      "dropdown-menu-slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "dropdown-menu-slide-up-and-fade":
      "dropdown-menu-slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "dropdown-menu-slide-right-and-fade":
      "dropdown-menu-slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    // HOVER CARD
    "hover-card-slide-up-and-fade":
      "hover-card-slide-up-and-fade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
    "hover-card-slide-down-and-fade":
      "hover-card-slide-down-and-fade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
    "hover-card-slide-right-and-fade":
      "hover-card-slide-right-and-fade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
    "hover-card-slide-left-and-fade":
      "hover-card-slide-left-and-fade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
    // MENUBAR
    "menubar-slide-down-and-fade":
      "menubar-slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "menubar-slide-left-and-fade":
      "menubar-slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "menubar-slide-up-and-fade":
      "menubar-slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "menubar-slide-right-and-fade":
      "menubar-slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    // NAVIGATION MENU
    "navigation-menu-scale-in": "navigation-menu-scale-in 200ms ease",
    "navigation-menu-scale-out": "navigation-menu-scale-out 200ms ease",
    "navigation-menu-fade-in": "navigation-menu-fade-in 200ms ease",
    "navigation-menu-fade-out": "navigation-menu-fade-out 200ms ease",
    "navigation-menu-enter-from-left":
      "navigation-menu-enter-from-left 250ms ease",
    "navigation-menu-enter-from-right":
      "navigation-menu-enter-from-right 250ms ease",
    "navigation-menu-exit-to-left": "navigation-menu-exit-to-left 250ms ease",
    "navigation-menu-exit-to-right": "navigation-menu-exit-to-right 250ms ease",
    // POPOVER
    "popover-slide-down-and-fade":
      "popover-slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "popover-slide-left-and-fade":
      "popover-slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "popover-slide-up-and-fade":
      "popover-slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "popover-slide-right-and-fade":
      "popover-slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    // TOAST
    "toast-hide": "toast-hide 100ms ease-in",
    "toast-slide-in": "toast-slide-in 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    "toast-swipe-out": "toast-swipe-out 100ms ease-out",
    // TOOLTIP
    "tooltip-slide-down-and-fade":
      "tooltip-slide-down-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "tooltip-slide-left-and-fade":
      "tooltip-slide-left-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "tooltip-slide-up-and-fade":
      "tooltip-slide-up-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    "tooltip-slide-right-and-fade":
      "tooltip-slide-right-and-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
    // -------------------
    // CMDK
    "cmdk-overlay-show":
      "cmdk-overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    "cmdk-content-show":
      "cmdk-content-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
};

const navigationMenuPlugin: NonNullable<Config["plugins"]> = [
  plugin(({ matchUtilities }) => {
    matchUtilities({
      perspective: (value) => ({
        perspective: value,
      }),
    });
  }),
];

const plugins = [...navigationMenuPlugin];

export { animations, plugins };
