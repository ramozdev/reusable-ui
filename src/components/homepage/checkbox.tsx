import { colors } from "@/lib/colors";
import Checkbox from "@/ui/html/checkbox";
import Label from "@/ui/html/label";
import Text from "@/ui/html/text";

export default function CheckboxDemo() {
  return (
    <div>
      <Text.H3>Checkbox</Text.H3>
      {colors.map((color) => (
        <div
          key={`checkbox-${color}`}
          className="grid grid-cols-4 gap-4 space-y-3"
        >
          <Label className="capitalize">{color}</Label>
          <Checkbox color={color} />
          <Checkbox color={color} className="border-black" />
          <Checkbox
            color={color}
            className="border-b-2 border-r-2 border-black"
          />
        </div>
      ))}
    </div>
  );
}
