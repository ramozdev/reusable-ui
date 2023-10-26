import Button from "@/ui/html/button";

export function Default() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color) => (
        <Button.Subtle key={`button-subtle-default-${color}`} color={color}>
          {color}
        </Button.Subtle>
      ))}
    </div>
  );
}
