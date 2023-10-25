import { Textarea } from "@/ui/html/textarea";

export function Plane() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {(["neutral"] as const).map((color, index) => (
        <div key={`textarea-plane-${color}-${index}`}>
          <label
            className="sr-only"
            htmlFor={`textarea-plane-${color}-${index}`}
          >
            Lorem Ipsum
          </label>
          <Textarea
            color={color}
            variant="plane"
            placeholder={`Lorem ipsum dolor sit amet. (${color})`}
            name={`textarea-plane-${color}-${index}`}
            id={`textarea-plane-${color}-${index}`}
          />
        </div>
      ))}
    </div>
  );
}
