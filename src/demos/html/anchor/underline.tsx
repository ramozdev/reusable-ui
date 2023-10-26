import Anchor from "@/ui/html/anchor";

export function Default() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color) => (
        <Anchor.Underline
          key={`anchor-solid-underline-${color}`}
          href="#underline"
          color={color}
        >
          {color}
        </Anchor.Underline>
      ))}
    </div>
  );
}
