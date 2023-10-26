import Checkbox from "@/ui/html/checkbox";

export function CheckboxDemo() {
  return (
    <div className="flex gap-2">
      <Checkbox name="accept" id="accept" />
      <label htmlFor="accept">Lorem Ipsum</label>
    </div>
  );
}
