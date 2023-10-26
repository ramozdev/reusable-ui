import Input from "@/ui/html/input";

export function Plane() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {(["neutral"] as const).map((color, index) => (
        <div key={`email-plane-${color}-${index}`}>
          <label className="sr-only" htmlFor={`email-plane-${color}-${index}`}>
            Email
          </label>
          <Input
            color={color}
            type="email"
            placeholder={`email (${color})`}
            variant="plane"
            name={`email-plane-${color}-${index}`}
            id={`email-plane-${color}-${index}`}
          />
        </div>
      ))}
    </div>
  );
}
