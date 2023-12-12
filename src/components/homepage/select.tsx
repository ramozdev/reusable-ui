import { colors } from "@/lib/colors";
import Select from "@/ui/html/select";
import Text from "@/ui/html/text";

export default function SelectDemo() {
  return (
    <div>
      <Text.H3>Select</Text.H3>
      {colors.map((color) => (
        <div key={color}>
          <p className="font-semibold">{color}</p>
          <Select color={color}>
            <option>Option 1</option>
            <option>Option 2</option>
          </Select>
        </div>
      ))}
    </div>
  );
}
