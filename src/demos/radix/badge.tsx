import * as Badge from "@/ui/html/badge/index";
import { Card } from "@/ui/html/card";

export function BadgeDemo() {
  return (
    <Card className="flex gap-2">
      <Badge.Subtle>default</Badge.Subtle>
      <Badge.Subtle variant="outline">outline</Badge.Subtle>
      <Badge.Solid>default</Badge.Solid>
      <Badge.Solid variant="outline">outline</Badge.Solid>
    </Card>
  );
}
