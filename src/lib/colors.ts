const colors = [
  "neutral",
  "brand",
  "slate",
  "gray",
  "zinc",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
] as const;

type Colors = (typeof colors)[number];

export { colors };
export type { Colors };
