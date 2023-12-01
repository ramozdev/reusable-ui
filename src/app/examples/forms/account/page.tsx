"use client";

import Button from "@/ui/html/button";
import Input from "@/ui/html/input";
import Label from "@/ui/html/label";
import Select from "@/ui/html/select";

export default function AccountForm() {
  return (
    <form
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
      className="w-full space-y-8"
    >
      <div>
        <div className="flex items-baseline justify-between">
          <Label required>Name</Label>
        </div>
        <Input type="text" required className="w-full" />
      </div>

      {/* email */}
      <div>
        <div className="flex items-baseline justify-between">
          <Label required>Date of birth</Label>
          Please enter your date
        </div>

        <Input type="date" required className="w-full" />
      </div>

      <div className="space-y-4 py-4">
        <div>
          <Label required>Language</Label>
          <Input type="url" required className="w-full" />
        </div>
        <Select required name="marital-status" id="marital-status">
          <option value="spanish">Spanish</option>
          <option value="english">English</option>
          <option value="portuguese">Portuguese</option>
        </Select>
      </div>
      <Button.Solid type="submit" color="white-black">
        Update account
      </Button.Solid>
    </form>
  );
}
