import * as Anchor from "@/ui/html/anchor";

export function Default() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color) => (
        <Anchor.Solid
          key={`anchor-solid-default-${color}`}
          href="#default"
          color={color}
        >
          {color}
        </Anchor.Solid>
      ))}
    </div>
  );
}
