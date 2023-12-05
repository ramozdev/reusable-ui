"use client";

import Button from "@/ui/html/button";
import TextInput from "@/ui/html/text-input";
import Select from "@/ui/html/select";

export default function AccountForm() {
  const handleSubmit = (e: React.FormEvent) => e.preventDefault();

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-8">
      <div>
        <TextInput
          id="email"
          type="email"
          caption="This email will be visible to others"
          validation="This email is already taken"
        >
          Email
        </TextInput>
      </div>

      <div className="my-4 space-y-4">
        <div>
          <TextInput
            id="text"
            type="text"
            caption="This Language will be visible to others"
            validation="This Language is already taken"
          >
            Language
          </TextInput>
        </div>
        <div className="flex items-baseline justify-between">
          <TextInput type="date" className="w-full">
            Birthday date
          </TextInput>
        </div>
        <Select required name="marital-status" id="marital-status">
          <option value="spanish">Spanish</option>
          <option value="english">English</option>
          <option value="portuguese">Portuguese</option>
        </Select>
      </div>

      <Button.Solid type="submit" color="white-black">
        Update Account
      </Button.Solid>
    </form>
  );
}
