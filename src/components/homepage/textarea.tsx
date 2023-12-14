import { colors } from "@/lib/colors";
import Textarea from "@/ui/html/textarea";
import Text from "@/ui/html/text";
import Label from "@/ui/html/label";

export default function TextareaDemo() {
  return (
    <div>
      <Text.H3>TextArea</Text.H3>
      {colors.map((color) => (
        <div
          key={`textare-${color}`}
          className="grid grid-cols-3 gap-4 space-y-3"
        >
          <Label className="capitalize">{color}</Label>
          <Textarea placeholder={color} color={color} />
          <Textarea
            placeholder={color}
            color={color}
            className="border-black focus:border-black dark:border-black"
          />
        </div>
      ))}
    </div>
  );
}
