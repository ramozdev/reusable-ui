import { colors } from "@/lib/colors";
import Text from "@/ui/html/text";
import TextInput from "@/ui/html/text-input";

export default function TextInputDemo() {
  return (
    <div>
      <Text.H3>Text Input</Text.H3>
      <div className="flex space-x-5">
        <div>
          {colors.map((color) => (
            <div key={`text-input-${color}`}>
              <p className="font-semibold">{color}</p>
              <TextInput color={color} />
            </div>
          ))}
        </div>
        <div>
          {colors.map((color) => (
            <div key={color}>
              <p className="font-semibold">{color}</p>
              <TextInput color={color} className="border-black" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
