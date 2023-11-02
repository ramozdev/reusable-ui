import { CheckboxDemo } from "@/demos/radix/checkbox";
import { DropdownMenuDemo } from "@/demos/radix/dropdown-menu";
import { HoverCardDemo } from "@/demos/radix/hover-card";
import { SliderDemo } from "@/demos/radix/slider";
import Buttons from "@/components/hero/buttons";
import Badges from "@/components/hero/badges";
import { ToggleHero } from "@/components/hero/toggle";
import { RadioGroupHero } from "@/components/hero/radio-group";
import { SwitchHero } from "@/components/hero/switch";
import { SelectHero } from "@/components/hero/select";
import Input from "@/ui/html/input";
import Label from "@/ui/html/label";

export default function Page() {
  return (
    <div className="mx-auto my-12 max-w-screen-lg space-y-8">
      <h1 className="text-3xl font-bold">Papel UI</h1>
      <div className="flex justify-between gap-4">
        <div className="grid flex-grow justify-center gap-y-8">
          <div className="flex justify-between gap-2">
            <HoverCardDemo />
            <SelectHero />
            <DropdownMenuDemo />
          </div>
          <div>
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input id="name" placeholder="Enter name" />
          </div>
          <div className="flex items-center justify-between gap-2">
            <RadioGroupHero />
            <div className="grid gap-y-8">
              <SliderDemo />
              <div className="flex items-center justify-between">
                <SwitchHero />
                <ToggleHero />
              </div>
            </div>
          </div>
          <Badges />
          <CheckboxDemo />
          <Buttons />
        </div>
      </div>
    </div>
  );
}
