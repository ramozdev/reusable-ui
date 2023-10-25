import { Kbd } from "@/ui/html/kbd";

export function Outline() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color, index) => (
        <p key={`kbd-outline-${color}-${index}`}>
          <Kbd color={color}>⌘</Kbd>
          <Kbd color={color}>{color}</Kbd>
          <Kbd color={color}>R</Kbd>
        </p>
      ))}
    </div>
  );
}
