"use client";

import Button from "@/ui/html/button";
import Input from "@/ui/html/input";
import Textarea from "@/ui/html/textarea";
import Form from "@/ui/radix/form";
import * as React from "react";

export function FormDemo() {
  return (
    <Form.Root onSubmit={(e: React.FormEvent) => e.preventDefault()}>
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
          <Input type="email" required />
        </Form.Control>
      </Form.Field>
      <Form.Field name="question">
        <Form.Label required>Question</Form.Label>
        <Form.Control asChild>
          <Textarea required />
        </Form.Control>
        <Form.Message className="mt-2" match="valueMissing">
          Please enter a question. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Exercitationem, numquam?
        </Form.Message>
      </Form.Field>
      <Form.Submit asChild>
        <Button.Solid className="w-full">Post question</Button.Solid>
      </Form.Submit>
    </Form.Root>
  );
}
