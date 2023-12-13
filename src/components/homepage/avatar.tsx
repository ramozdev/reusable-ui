"use client";

import { colors } from "@/lib/colors";
import Text from "@/ui/html/text";
import Avatar from "@/ui/radix/avatar";
import { Fragment } from "react";

export function AvatarDemo() {
  return (
    <div>
      <Text.H3>Avatar</Text.H3>
      <div className="grid w-96 grid-cols-2 gap-y-4">
        {colors.map((color) => (
          <Fragment key={color}>
            <p className="font-semibold">{color}</p>
            <div className="flex gap-5">
              <Avatar.Root color={color}>
                <Avatar.Image
                  color={color}
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                  alt="Colm Tuite"
                />
                <Avatar.Fallback color={color}>CT</Avatar.Fallback>
              </Avatar.Root>
              <Avatar.Root color={color}>
                <Avatar.Image
                  src="https://github.com/ColumpioLabs.png"
                  alt="Columpio Labs"
                />
                <Avatar.Fallback color={color}>DR</Avatar.Fallback>
              </Avatar.Root>
              <Avatar.Root color={color}>
                <Avatar.Fallback color={color}>PD</Avatar.Fallback>
              </Avatar.Root>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
