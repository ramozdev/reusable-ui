import Card from "@/ui/html/card";

export function Outline() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {(["white-black"] as const).map((color, index) => (
        <Card key={`card-outline-${color}-${index}`} color={color}>
          {color}
        </Card>
      ))}
    </div>
  );
}
