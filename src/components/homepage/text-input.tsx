import { colors } from "@/lib/colors";
import Label from "@/ui/html/label";
import Text from "@/ui/html/text";
import TextInput from "@/ui/html/text-input";

export default function TextInputDemo() {
  return (
    <div>
      <Text.H3>Text Input</Text.H3>
      <div>
        {colors.map((color) => (
          <div key={`text-input-${color}`} className="grid grid-cols-3">
            <Label className="capitalize">{color}</Label>
            <TextInput color={color} />
            <TextInput color={color} className="border-black" />
          </div>
        ))}
      </div>
    </div>
  );
}
