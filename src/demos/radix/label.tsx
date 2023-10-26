"use client";

import Button from "@/ui/html/button";
import Fieldset from "@/ui/html/fieldset";
import Input from "@/ui/html/input";
import Legend from "@/ui/html/legend";
import Textarea from "@/ui/html/textarea";
import Label from "@/ui/radix/label";

export function LabelDemo() {
  return (
    <form className="mx-auto w-[400px]" onSubmit={(e) => e.preventDefault()}>
      <Fieldset outline>
        <Legend>User Registration</Legend>
        <Label.Root required htmlFor="name">
          First name
        </Label.Root>
        <Input required id="name" />
        <Label.Root htmlFor="middle-name">Middle name</Label.Root>
        <Input id="middle-name" />
        <Label.Root required htmlFor="bio">
          Bio
        </Label.Root>
        <Textarea required id="bio"></Textarea>
      </Fieldset>
      <Button.Solid className="mt-4 w-full">Submit</Button.Solid>
    </form>
  );
}
