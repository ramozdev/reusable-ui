import Label from "@/ui/html/label";
import { colors } from "@/lib/colors";
import React from "react";
import Text from "@/ui/html/text";
import Card from "@/ui/html/card";

export default function LabelDemo() {
  return (
    <div>
      <Text.H3>Label</Text.H3>
      <Card className="max-w-sm">
        {colors.map((color) => (
          <div key={`label-${color}`}>
            <Label color={color}>{color.toUpperCase()}</Label>
          </div>
        ))}
      </Card>
    </div>
  );
}
