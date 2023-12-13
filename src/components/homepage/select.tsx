import { colors } from "@/lib/colors";
import Label from "@/ui/html/label";
import Select from "@/ui/html/select";
import Text from "@/ui/html/text";

export default function SelectDemo() {
  return (
    <div>
      <Text.H3>Select</Text.H3>
      {colors.map((color) => (
        <div
          key={`select${color}`}
          className="grid w-56 grid-cols-2 items-center space-y-3"
        >
          <Label className="capitalize">{color}</Label>
          <Select color={color}>
            <option>Option 1</option>
            <option>Option 2</option>
          </Select>
        </div>
      ))}
    </div>
  );
}
