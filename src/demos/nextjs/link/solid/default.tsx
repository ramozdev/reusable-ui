import Link from "@/ui/nextjs/link";

export function Default() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color) => (
        <Link.Solid
          key={`anchor-solid-default-${color}`}
          href="#default"
          color={color}
        >
          {color}
        </Link.Solid>
      ))}
    </div>
  );
}
