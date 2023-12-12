import { colors } from "@/lib/colors";
import Checkbox from "@/ui/html/checkbox";
import Text from "@/ui/html/text";

export default function CheckboxDemo() {
  return (
    <div>
      <Text.H3>Checkbox</Text.H3>
      {colors.map((color) => (
        <div key={color}>
          <p className="font-semibold">{color}</p>
          <div className="flex space-x-2">
            <Checkbox color={color} />
            <Checkbox color={color} className="border-black" />
            <Checkbox
              color={color}
              className="border-b-2 border-r-2 border-black"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
