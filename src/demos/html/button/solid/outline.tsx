import * as Button from "@/ui/html/button";

export function Outline() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color) => (
        <Button.Solid
          key={`button-solid-outline-${color}`}
          variant="outline"
          color={color}
        >
          {color}
        </Button.Solid>
      ))}
    </div>
  );
}
