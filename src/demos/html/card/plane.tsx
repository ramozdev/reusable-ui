import Card from "@/ui/html/card";

export function Plane() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {(["white-black"] as const).map((color, index) => (
        <Card
          key={`card-outline-${color}-${index}`}
          variant="plane"
          color={color}
        >
          {color}
        </Card>
      ))}
    </div>
  );
}
