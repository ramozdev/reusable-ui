import { colors } from "@/lib/colors";
import Badge from "@/ui/html/badge";
import Card from "@/ui/html/card";
import Label from "@/ui/html/label";
import Text from "@/ui/html/text";

export default function BadgeDemo() {
  return (
    <div>
      <Text.H3>Badge</Text.H3>
      {colors.map((color) => (
        <div
          key={`badge-${color}`}
          className="grid grid-cols-2 items-center space-y-3 "
        >
          <Label className="capitalize">{color}</Label>
          <Card className="flex justify-between space-x-2">
            <Badge.Solid color={color}>Solid default </Badge.Solid>

            <Badge.Solid color={color} variant="ghost">
              Solid ghost
            </Badge.Solid>
            <Badge.Subtle color={color}>Subtle default</Badge.Subtle>

            <Badge.Subtle color={color} variant="ghost">
              Subtle ghost
            </Badge.Subtle>
          </Card>
        </div>
      ))}
    </div>
  );
}
