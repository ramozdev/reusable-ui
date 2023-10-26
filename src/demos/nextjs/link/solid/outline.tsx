import Link from "@/ui/nextjs/link";

export function Outline() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color) => (
        <Link.Solid
          key={`anchor-solid-outline-${color}`}
          variant="outline"
          href="#outline"
          color={color}
        >
          {color}
        </Link.Solid>
      ))}
    </div>
  );
}
