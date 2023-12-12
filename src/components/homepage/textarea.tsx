import { colors } from "@/lib/colors";
import Textarea from "@/ui/html/textarea";
import Text from "@/ui/html/text";

export default function TextareaDemo() {
  return (
    <div>
      <Text.H3>TextArea</Text.H3>
      {colors.map((color) => (
        <div key={color}>
          <p className="font-semibold">{color}</p>
          <div className="flex space-x-2">
            <Textarea placeholder={color} color={color} />
            <Textarea
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
