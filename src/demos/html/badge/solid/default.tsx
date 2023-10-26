import Badge from "@/ui/html/badge";

export function Default() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color) => (
        <Badge.Solid key={`badge-solid-default-${color}`} color={color}>
          {color}
        </Badge.Solid>
      ))}
    </div>
  );
}
