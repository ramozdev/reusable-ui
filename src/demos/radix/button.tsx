import Button from "@/ui/html/button/index";
import Card from "@/ui/html/card";

export function ButtonDemo() {
  return (
    <Card className="flex gap-2">
      <Button.Subtle>subtle default</Button.Subtle>
      <Button.Subtle variant="outline">subtle outline</Button.Subtle>
      <Button.Solid>solid default</Button.Solid>
      <Button.Solid variant="outline">solid outline</Button.Solid>
    </Card>
  );
}
