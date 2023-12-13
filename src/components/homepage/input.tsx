import { colors } from "@/lib/colors";
import Input from "@/ui/html/input";
import Label from "@/ui/html/label";
import Text from "@/ui/html/text";

export default function InputDemo() {
  return (
    <div>
      <Text.H3>Inputs</Text.H3>
      {colors.map((color) => (
        <div
          key={`input-${color}`}
          className="grid grid-cols-3 gap-4 space-y-3"
        >
          <Label className="capitalize">{color}</Label>
          <Input placeholder={color} color={color} />
          <Input
            placeholder={color}
            color={color}
            className="border-black focus:border-black dark:border-black"
          />
        </div>
      ))}
    </div>
  );
}
