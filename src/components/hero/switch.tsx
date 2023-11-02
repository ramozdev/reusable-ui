"use client";

import Label from "@/ui/radix/label";
import Switch from "@/ui/radix/switch";

export function SwitchHero() {
  return (
    <form>
      <div className="flex items-center">
        <Label.Root className="pr-[15px]" htmlFor="airplane-mode">
          Wi-Fi
        </Label.Root>
        <Switch.Root id="airplane-mode">
          <Switch.Thumb />
        </Switch.Root>
      </div>
    </form>
  );
}
