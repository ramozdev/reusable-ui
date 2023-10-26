import Anchor from "@/ui/html/anchor";

export function Outline() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color) => (
        <Anchor.Solid
          key={`anchor-solid-outline-${color}`}
          variant="outline"
          href="#outline"
          color={color}
        >
          {color}
        </Anchor.Solid>
      ))}
    </div>
  );
}
