import Button from "@/ui/html/button";

export function Default() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color) => (
        <Button.Solid key={`button-solid-default-${color}`} color={color}>
          {color}
        </Button.Solid>
      ))}
    </div>
  );
}
