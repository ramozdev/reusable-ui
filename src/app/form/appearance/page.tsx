"use client";

import Button from "@/ui/html/button";
import Label from "@/ui/html/label";
import Select from "@/ui/html/select";

export default function AppearanceForm() {
  return (
    <form
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
      className="w-full space-y-8"
    >
      <div>
        <Label required>Font</Label>
        <Select required name="marital-status" id="marital-status">
          <option value="inter">Inter</option>
          <option value="manrope">Manrope</option>
          <option value="system">System</option>
        </Select>
      </div>
      <Button.Solid type="submit" color="white_black">
        Update preferences
      </Button.Solid>
    </form>
  );
}
