import Checkbox from "@/ui/html/checkbox";

export function Outline() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color, index) => (
        <div className="flex gap-2" key={`checkbox-outline-${color}-${index}`}>
          <Checkbox
            color={color}
            name={`checkbox-outline-${color}-${index}`}
            id={`checkbox-outline-${color}-${index}`}
          />
          <label htmlFor={`checkbox-outline-${color}-${index}`}>{color}</label>
        </div>
      ))}
    </div>
  );
}
