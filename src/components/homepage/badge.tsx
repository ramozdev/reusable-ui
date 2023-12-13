import { colors } from "@/lib/colors";
import Badge from "@/ui/html/badge";
import Card from "@/ui/html/card";
import Text from "@/ui/html/text";

export default function BadgeDemo() {
  return (
    <div>
      <Text.H3>Badge</Text.H3>
      {colors.map((color) => (
        <div key={`badge-${color}`}>
          <p className="font-semibold">{color}</p>
          <div className="space-y-2">
            <Card className="space-x-2">
              <Badge.Solid color={color}>Solid default </Badge.Solid>

              <Badge.Solid color={color} variant="ghost">
                Solid ghost
              </Badge.Solid>
            </Card>

            <Card className="space-x-2">
              <Badge.Subtle color={color}>Subtle default</Badge.Subtle>

              <Badge.Subtle color={color} variant="ghost">
                Subtle ghost
              </Badge.Subtle>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
