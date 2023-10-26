import Anchor from "@/ui/html/anchor";

export function Default() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color) => (
        <Anchor.Subtle
          key={`anchor-solid-default-${color}-1`}
          href="#default-1"
          color={color}
        >
          {color}
        </Anchor.Subtle>
      ))}
    </div>
  );
}
