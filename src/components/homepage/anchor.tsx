import Anchor from "@/ui/html/anchor";
import { colors } from "@/lib/colors";
import Text from "@/ui/html/text";
import Label from "@/ui/html/label";

export default function AnchorDemo() {
  const solidAnchors = colors.map((color) => (
    <div key={`solid-${color}`} className="flex space-x-4">
      <Anchor.Solid color={color} href="#">
        Default
      </Anchor.Solid>
      <Anchor.Solid color={color} href="#" variant="outline">
        Outline
      </Anchor.Solid>
      <Anchor.Solid color={color} href="#" variant="ghost">
        Ghost
      </Anchor.Solid>
    </div>
  ));

  const subtleAnchors = colors.map((color) => (
    <div key={`subtle-${color}`} className="flex space-x-4">
      <Anchor.Subtle color={color} href="#">
        Default
      </Anchor.Subtle>
      <Anchor.Subtle color={color} href="#" variant="outline">
        Outline
      </Anchor.Subtle>
      <Anchor.Subtle color={color} href="#" variant="ghost">
        Ghost
      </Anchor.Subtle>
    </div>
  ));

  const underlineAnchors = colors.map((color) => (
    <div key={`underline-${color}`}>
      <Anchor.Underline color={color} href="#">
        Underline
      </Anchor.Underline>
    </div>
  ));

  return (
    <div>
      <Text.H3>Anchors</Text.H3>
      <div className="flex justify-between">
        <div className="space-y-2">
          <Text.H4>Colors</Text.H4>
          {colors.map((color) => (
            <div key={`anchor-${color}`}>
              <Label className="capitalize">{color}</Label>
            </div>
          ))}
        </div>
        <div className="space-y-1">
          <Text.H4>Solid</Text.H4>
          {solidAnchors}
        </div>
        <div className="space-y-1">
          <Text.H4>Subtle</Text.H4>
          {subtleAnchors}
        </div>
        <div className="space-y-3">
          <Text.H4>Underline</Text.H4>
          {underlineAnchors}
        </div>
      </div>
    </div>
  );
}
