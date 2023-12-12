import Anchor from "@/ui/html/anchor";
import { colors } from "@/lib/colors";
import Text from "@/ui/html/text";

export default function AnchorDemo() {
  const solidAnchors = colors.map((color) => (
    <div key={color} className="flex space-x-4">
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
    <div key={color} className="flex space-x-4">
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
    <div key={color}>
      <Anchor.Underline color={color} href="#">
        Underline
      </Anchor.Underline>
    </div>
  ));

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="space-y-4">
        <Text.H3>Solid</Text.H3>
        {solidAnchors}
      </div>
      <div className="space-y-4">
        <Text.H3>Subtle</Text.H3>
        {subtleAnchors}
      </div>
      <div className="space-y-4">
        <Text.H3>Underline</Text.H3>
        {underlineAnchors}
      </div>
    </div>
  );
}
