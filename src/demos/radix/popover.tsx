"use client";

import Button from "@/ui/html/button";
import Input from "@/ui/html/input";
import Label from "@/ui/html/label";
import Popover from "@/ui/radix/popover";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";

export function PopoverDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button.Solid
          size="icon"
          color="neutral"
          aria-label="Update dimensions"
        >
          <MixerHorizontalIcon />
        </Button.Solid>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="w-[350px]">
          <div className="flex flex-col gap-2.5">
            <p className="mb-2.5 text-[15px] font-medium leading-[19px]">
              Dimensions
            </p>
            <fieldset className="flex items-center gap-5">
              <Label className="w-[180px]" htmlFor="width">
                Width
              </Label>
              <Input className="w-full" id="width" defaultValue="100%" />
            </fieldset>
            <fieldset className="flex items-center gap-5">
              <Label className="w-[180px]" htmlFor="maxWidth">
                Max. width
              </Label>
              <Input className="w-full" id="maxWidth" defaultValue="300px" />
            </fieldset>
            <fieldset className="flex items-center gap-5">
              <Label className="w-[180px]" htmlFor="height">
                Height
              </Label>
              <Input className="w-full" id="height" defaultValue="25px" />
            </fieldset>
            <fieldset className="flex items-center gap-5">
              <Label className="w-[180px]" htmlFor="maxHeight">
                Max. height
              </Label>
              <Input className="w-full" id="maxHeight" defaultValue="none" />
            </fieldset>
          </div>
          <Popover.Close asChild>
            <Button.Solid
              size="icon"
              color="neutral"
              className="absolute right-[8px] top-[8px] rounded-full"
              variant="outline"
              aria-label="Close"
            >
              <Cross2Icon />
            </Button.Solid>
          </Popover.Close>
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
