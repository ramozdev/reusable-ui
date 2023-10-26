import Input from "@/ui/html/input";

export function Outline() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {(["neutral"] as const).map((color, index) => (
        <div key={`email-outline-${color}-${index}`}>
          <label
            className="sr-only"
            htmlFor={`email-outline-${color}-${index}`}
          >
            Email
          </label>
          <Input
            color={color}
            type="email"
            placeholder={`email (${color})`}
            name={`email-outline-${color}-${index}`}
            id={`email-outline-${color}-${index}`}
          />
        </div>
      ))}
    </div>
  );
}
