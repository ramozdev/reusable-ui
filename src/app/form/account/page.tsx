"use client";

import Button from "@/ui/html/button";
import Input from "@/ui/html/input";
import Select from "@/ui/html/select";
import Form from "@/ui/radix/form";

export default function AccountForm() {
  return (
    <Form.Root
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
      className="w-full space-y-8"
    >
      <Form.Field name="name">
        <div className="flex items-baseline justify-between">
          <Form.Label required>Name</Form.Label>
          <Form.Message match="valueMissing">
            Please enter your Name
          </Form.Message>
          <Form.Message match="typeMismatch">
            Please provide a valid Name
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Input type="text" required className="w-full" />
        </Form.Control>
      </Form.Field>

      {/* email */}
      <Form.Field name="date">
        <div className="flex items-baseline justify-between">
          <Form.Label required>Date of birth</Form.Label>
          <Form.Message match="valueMissing">
            Please enter your date
          </Form.Message>
          <Form.Message match="typeMismatch">
            Please provide a valid date
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Input type="date" required className="w-full" />
        </Form.Control>
      </Form.Field>

      <div>
        <Form.Field name="urls">
          <Form.Label required>Language</Form.Label>
          <Form.Control asChild>
            <Input type="url" required className="w-full" />
          </Form.Control>
        </Form.Field>
        <Select required name="marital-status" id="marital-status">
          <option value="spanish">Spanish</option>
          <option value="english">English</option>
          <option value="portuguese">Portuguese</option>
        </Select>
      </div>
      <Button.Solid type="submit" color="white_black">
        Update account
      </Button.Solid>
    </Form.Root>
  );
}
