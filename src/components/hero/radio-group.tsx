"use client";

import Label from "@/ui/radix/label";
import RadioGroup from "@/ui/radix/radio-group";

export function RadioGroupHero() {
  return (
    <RadioGroup.Root defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroup.Radio value="default" id="r1" />
        <Label.Root htmlFor="r1">Default</Label.Root>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroup.Radio value="comfortable" id="r2" />
        <Label.Root htmlFor="r2">Comfortable</Label.Root>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroup.Radio value="compact" id="r3" />
        <Label.Root htmlFor="r3">Compact</Label.Root>
      </div>
    </RadioGroup.Root>
  );
}
