import Badge from "@/ui/html/badge";

export function Outline() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color) => (
        <Badge.Subtle
          key={`badge-subtle-outline-${color}`}
          variant="outline"
          color={color}
        >
          {color}
        </Badge.Subtle>
      ))}
    </div>
  );
}
