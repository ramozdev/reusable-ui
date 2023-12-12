"use client";

import { colors } from "@/lib/colors";
import Label from "@/ui/html/label";
import Text from "@/ui/html/text";
import Switch from "@/ui/radix/switch";
import { Fragment } from "react";

export default function SwitchDemo() {
  return (
    <div>
      <Text.H3>Switch</Text.H3>
      <div className="grid w-96 grid-cols-2 gap-y-4">
        {colors.map((color) => (
          <Fragment key={color}>
            <p className="font-semibold">{color}</p>
            <div className="flex items-center">
              <Label className="sr-only" htmlFor="airplane-mode">
                Airplane mode
              </Label>
              <Switch.Root color={color} id="airplane-mode">
                <Switch.Thumb color={color} />
              </Switch.Root>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
