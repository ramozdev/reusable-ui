import Checkbox from "@/ui/html/checkbox";

export function Plane() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color, index) => (
        <div className="flex gap-2" key={`plane-outline-${color}-${index}`}>
          <Checkbox
            color={color}
            variant="plane"
            name={`plane-outline-${color}-${index}`}
            id={`plane-outline-${color}-${index}`}
          />
          <label htmlFor={`plane-outline-${color}-${index}`}>{color}</label>
        </div>
      ))}
    </div>
  );
}
