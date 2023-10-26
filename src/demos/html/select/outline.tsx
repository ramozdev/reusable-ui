import Select from "@/ui/html/select";

export function Outline() {
  return (
    <div className="flex flex-wrap gap-4">
      {(["neutral"] as const).map((color, index) => (
        <div key={`select-outline-${color}-${index}`}>
          <label
            className="sr-only"
            htmlFor={`select-outline-${color}-${index}`}
          >
            Lorem Ipsum
          </label>
          <Select
            color={color}
            name={`select-outline-${color}-${index}`}
            id={`select-outline-${color}-${index}`}
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
