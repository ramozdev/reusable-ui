"use client";

import Button from "@/ui/html/button";
import Input from "@/ui/html/input";
import Textarea from "@/ui/html/textarea";
import Form from "@/ui/radix/form";

export function ProfileForm() {
  return (
    <Form.Root
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
      className="w-full space-y-8"
    >
      <Form.Field name="username">
        <div className="flex items-baseline justify-between">
          <Form.Label required>Username</Form.Label>
          <Form.Message match="valueMissing">
            Please enter your username
          </Form.Message>
          <Form.Message match="typeMismatch">
            Please provide a valid username
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Input type="text" required className="w-full" />
        </Form.Control>
      </Form.Field>

      {/* email */}
      <Form.Field name="email">
        <div className="flex items-baseline justify-between">
          <Form.Label required>Email</Form.Label>
          <Form.Message match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Input type="email" required className="w-full" />
        </Form.Control>
      </Form.Field>

      {/* text */}
      <Form.Field name="question">
        <Form.Label required>Bio</Form.Label>
        <Form.Control asChild>
          <Textarea required className="w-full" />
        </Form.Control>
        <Form.Message className="mt-2" match="valueMissing">
          Please enter a question. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Exercitationem, numquam?
        </Form.Message>
      </Form.Field>
      <div>
        <Form.Field name="urls">
          <Form.Label required>URLs</Form.Label>
          <Form.Control asChild>
            <Input type="url" required className="w-full" />
          </Form.Control>
          <Form.Message className="mt-2" match="valueMissing">
            Please enter a question. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Exercitationem, numquam?
          </Form.Message>
        </Form.Field>
        <Button.Solid
          type="button"
          variant="outline"
          color="white_black"
          className="mt-2"
        >
          Add URL
        </Button.Solid>
      </div>
      <Button.Solid type="submit" color="white_black">
        Update profile
      </Button.Solid>
    </Form.Root>
  );
}
