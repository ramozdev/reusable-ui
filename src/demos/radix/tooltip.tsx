"use client";

import Button from "@/ui/html/button";
import Tooltip from "@/ui/radix/tooltip";
import { PlusIcon } from "@radix-ui/react-icons";

export function TooltipDemo() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button.Solid size="icon" variant="outline" className="rounded-full">
            <PlusIcon />
          </Button.Solid>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content>
            Add to library
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
