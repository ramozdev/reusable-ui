import { colors } from "@/lib/colors";
import Button from "@/ui/html/button";
import Text from "@/ui/html/text";

export default function ButtonDemo() {
  return (
    <div>
      <Text.H3>Buttons</Text.H3>
      {colors.map((color) => (
        <div key={color}>
          <p className="font-semibold">{color}</p>
          <div className="space-y-2">
            <div>
              <Button.Solid color={color}>Solid Default</Button.Solid>
              <Button.Solid color={color} variant="ghost">
                Solid Ghost
              </Button.Solid>
              <Button.Solid color={color} variant="outline">
                Solid Outline
              </Button.Solid>
            </div>

            <div>
              <Button.Subtle color={color}>Subtle Default</Button.Subtle>
              <Button.Subtle color={color} variant="ghost">
                Subtle Ghost
              </Button.Subtle>
              <Button.Subtle color={color} variant="outline">
                Subtle Outline
              </Button.Subtle>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
