import Button from "@/ui/html/button/index";

export function ButtonDemo() {
  return (
    <div className="flex gap-2">
      <Button.Subtle>subtle default</Button.Subtle>
      <Button.Subtle variant="outline">subtle outline</Button.Subtle>
      <Button.Solid>solid default</Button.Solid>
      <Button.Solid variant="outline">solid outline</Button.Solid>
    </div>
  );
}
