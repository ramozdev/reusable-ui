import { colors } from "@/lib/colors";
import Input from "@/ui/html/input";
import Text from "@/ui/html/text";

export default function InputDemo() {
  return (
    <div>
      <Text.H3>Inputs</Text.H3>
      {colors.map((color) => (
        <div key={`input-${color}`}>
          <p className="font-semibold">{color}</p>
          <div className="flex space-x-2">
            <Input placeholder={color} color={color} />
            <Input
              placeholder={color}
              color={color}
              className="border-black focus:border-black dark:border-black"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
