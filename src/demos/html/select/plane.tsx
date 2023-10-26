import Select from "@/ui/html/select";

export function Plane() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color, index) => (
        <div key={`select-plane-${color}-${index}`}>
          <label className="sr-only" htmlFor={`select-plane-${color}-${index}`}>
            Lorem Ipsum
          </label>
          <Select
            color={color}
            variant="plane"
            name={`select-plane-${color}-${index}`}
            id={`select-plane-${color}-${index}`}
          >
            <option value="single">Single ({color})</option>
            <option value="married">Married ({color})</option>
            <option value="widowed">Widowed ({color})</option>
          </Select>
        </div>
      ))}
    </div>
  );
}
