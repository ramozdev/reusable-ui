import Input from "@/ui/html/input";
import Textarea from "@/ui/html/textarea";
import Button from "@/ui/html/button";
import Checkbox from "@/ui/html/checkbox";
import Badge from "@/ui/html/badge";
import Text from "@/ui/html/text";
import Select from "@/ui/html/select";
import Card from "@/ui/html/card";

const colors = [
  "neutral",
  "brand",
  "slate",
  "gray",
  "zinc",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
] as const;

export default function page() {
  return (
    <div className="mx-auto my-20 max-w-screen-sm space-y-4">
      <Text.H3>Inputs</Text.H3>
      {colors.map((color) => (
        <div key={color}>
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

      <Text.H3>Badge</Text.H3>
      {colors.map((color) => (
        <div key={color}>
          <p className="font-semibold">{color}</p>
          <div className="space-y-2">
            <Card className="space-x-2">
              <Badge.Solid color={color}>Solid default </Badge.Solid>

              {/* <Badge.Solid color={color} variant="outline">
                Solid outline
              </Badge.Solid> */}

              <Badge.Solid color={color} variant="ghost">
                Solid ghost
              </Badge.Solid>
            </Card>

            <Card className="space-x-2">
              <Badge.Subtle color={color}>Subtle default</Badge.Subtle>

              {/* <Badge.Subtle color={color} variant="outline">
                Subtle outline
              </Badge.Subtle> */}

              <Badge.Subtle color={color} variant="ghost">
                Subtle ghost
              </Badge.Subtle>
            </Card>
          </div>
        </div>
      ))}

      <Text.H3>Buttons</Text.H3>
      {colors.map((color) => (
        <div key={color}>
          <p className="font-semibold">{color}</p>
          <div className="space-y-2">
            <div>
              <Button.Solid color={color}>Solid Default</Button.Solid>
              <Button.Solid color={color} variant="ghost">
                Solid Ghost
              </Button.Solid>
              <Button.Solid color={color} variant="outline">
                Solid Outline
              </Button.Solid>
            </div>

            <div>
              <Button.Subtle color={color}>Subtle Default</Button.Subtle>
              <Button.Subtle color={color} variant="ghost">
                Subtle Ghost
              </Button.Subtle>
              <Button.Subtle color={color} variant="outline">
                Subtle Outline
              </Button.Subtle>
            </div>
          </div>
        </div>
      ))}

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
