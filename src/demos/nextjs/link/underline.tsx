import Link from "@/ui/nextjs/link";

export function Default() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color) => (
        <Link.Underline
          key={`anchor-solid-underline-${color}`}
          href="#underline"
          color={color}
        >
          {color}
        </Link.Underline>
      ))}
    </div>
  );
}
