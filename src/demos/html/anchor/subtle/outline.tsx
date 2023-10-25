import * as Anchor from "@/ui/html/anchor";

export function Outline() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color) => (
        <Anchor.Subtle
          key={`anchor-solid-outline-${color}-1`}
          variant="outline"
          href="#outline-1"
          color={color}
        >
          {color}
        </Anchor.Subtle>
      ))}
    </div>
  );
}
