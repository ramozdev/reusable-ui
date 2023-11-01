import type { Config } from "tailwindcss";

const dialog: NonNullable<Config["theme"]>["extend"] = {
  keyframes: {
    "dialog-overlay-show": {
      from: { opacity: "0" },
      to: { opacity: "1" },
    },
    "dialog-content-show": {
      from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
      to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
    },
  },
  animation: {
    "dialog-overlay-show":
      "dialog-overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
    "dialog-content-show":
      "dialog-content-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
};

export { dialog };
