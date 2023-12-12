"use client";

import Text from "@/ui/html/text";
import Button from "@/ui/html/button";
import Tooltip from "@/ui/radix/tooltip";
import { PlusIcon } from "@radix-ui/react-icons";
import { Fragment } from "react";
import { colors } from "@/lib/colors";

export default function TootlipDemo() {
  return (
    <div>
      <Text.H3>Tooltip</Text.H3>
      <div className="grid w-96 grid-cols-2 gap-y-4">
        {colors.map((color) => (
          <Fragment key={color}>
            <p className="font-semibold">{color}</p>
            <div className="flex space-x-2">
              <Tooltip.Provider>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <Button.Solid color={color} size="icon" variant="outline">
                      <PlusIcon />
                    </Button.Solid>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content color={color}>
                      Add to library
                      <Tooltip.Arrow color={color} />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
