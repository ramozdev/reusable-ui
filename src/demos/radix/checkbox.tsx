"use client";

import Checkbox from "@/ui/radix/checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export function CheckboxDemo() {
  return (
    <form>
      <div className="flex items-center">
        <Checkbox.Root defaultChecked id="c1">
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className="pl-[15px] text-[15px] leading-none" htmlFor="c1">
          Accept terms and conditions.
        </label>
      </div>
    </form>
  );
}
