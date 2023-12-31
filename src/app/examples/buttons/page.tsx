"use client";

import Button from "@/ui/html/button";
import Card from "@/ui/html/card";
import { useState } from "react";
import { type Colors, colors } from "@/lib/colors";

export default function Page() {
  const [color, setColor] = useState<Colors>("amber");

  const handleColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value as Colors);
  };

  return (
    <div className="mx-auto my-10 flex max-w-screen-xl justify-center">
      <div>
        <Card className="space-y-10">
          <div className="flex justify-end">
            <select
              id="colorSelector"
              value={color}
              onChange={handleColor}
              className={`darkfocus:border-neutral-900 dark:focus:ring-transparentdark:active:border-neutral-900 rounded border border-neutral-200 bg-neutral-100 uppercase text-neutral-900 focus:border-neutral-200 focus:ring-transparent active:border-neutral-200 active:ring-transparent
              dark:border-neutral-800 dark:bg-neutral-950
              dark:text-neutral-200 dark:focus:border-neutral-900 dark:active:ring-transparent`}
            >
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          {/* COLOR SELECTED */}
          <div className="flex justify-center space-x-2">
            <Button.Solid color={color}>Solid Default</Button.Solid>
            <Button.Solid color={color} variant="ghost">
              Solid Ghost
            </Button.Solid>
            <Button.Solid color={color} variant="outline">
              Solid Outline
            </Button.Solid>
          </div>
          <div className="flex justify-center space-x-2">
            <Button.Subtle color={color}>Subtle Default</Button.Subtle>
            <Button.Subtle color={color} variant="ghost">
              Subtle Ghost
            </Button.Subtle>
            <Button.Subtle color={color} variant="outline">
              Subtle Outline
            </Button.Subtle>
          </div>
        </Card>
      </div>
    </div>
  );
}
