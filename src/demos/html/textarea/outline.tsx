import Textarea from "@/ui/html/textarea";

export function Outline() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {(["neutral"] as const).map((color, index) => (
        <div key={`textarea-outline-${color}-${index}`}>
          <label
            className="sr-only"
            htmlFor={`textarea-outline-${color}-${index}`}
          >
            Lorem Ipsum
          </label>
          <Textarea
            color={color}
            placeholder={`Lorem ipsum dolor sit amet. (${color})`}
            name={`textarea-outline-${color}-${index}`}
            id={`textarea-outline-${color}-${index}`}
          />
        </div>
      ))}
    </div>
  );
}
