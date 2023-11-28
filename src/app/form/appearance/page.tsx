"use client";

import Button from "@/ui/html/button";
import Select from "@/ui/html/select";
import Form from "@/ui/radix/form";

export default function AppearanceForm() {
  return (
    <Form.Root
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
      className="w-full space-y-8"
    >
      <div>
        <Form.Field name="urls">
          <Form.Label required>Font</Form.Label>
        </Form.Field>
        <Select required name="marital-status" id="marital-status">
          <option value="inter">Inter</option>
          <option value="manrope">Manrope</option>
          <option value="system">System</option>
        </Select>
      </div>
      <Button.Solid type="submit" color="white_black">
        Update preferences
      </Button.Solid>
    </Form.Root>
  );
}
