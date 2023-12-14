"use client";

import Card from "@/ui/html/card";
import React from "react";
import Text from "@/ui/html/text";
import { useState } from "react";
import { type Colors, colors } from "@/lib/colors";
import Select from "@/ui/html/select";

export default function CardDemo() {
  const [color, setColor] = useState<Colors>("red");

  const handleColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value as Colors);
  };
  return (
    <div className="max-w-sm space-y-2">
      <Text.H3>Card</Text.H3>
      <Select
        id="colorSelector"
        value={color}
        color={color}
        onChange={handleColor}
      >
        {colors.map((color) => (
          <option key={`card-${color}`} value={color}>
            {color}
          </option>
        ))}
      </Select>
      <Card color={color}>
        <Text.H3 className="mb-0 mt-0">Saul Perez</Text.H3>
        <Text.P className="[&:not(:first-child)]:mt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
          explicabo dicta animi eaque magnam deserunt, saepe nulla, voluptatum
          nostrum atque, tenetur numquam itaque eligendi! Voluptas, numquam
          provident? Fugit, totam accusamus.
        </Text.P>
      </Card>
    </div>
  );
}
