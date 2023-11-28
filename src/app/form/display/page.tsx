"use client";

import Button from "@/ui/html/button";
import Checkbox from "@/ui/html/checkbox";
import Form from "@/ui/radix/form";

export default function DisplayForm() {
  return (
    <Form.Root
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
      className="w-full space-y-8"
    >
      <div>
        <Form.Field name="urls">
          <Form.Label required>Sidebar</Form.Label>
          <br />
          <span className="text-sm text-neutral-950 dark:text-neutral-50">
            {" "}
            Select the items you want to display in the sidebar
          </span>
          <div className="my-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i}>
                <div className="my-2 space-x-1">
                  <Form.Control asChild>
                    <Checkbox name="accept" id="accept" className="h-4 w-4" />
                  </Form.Control>
                  <label
                    htmlFor="accept"
                    className="text-neutral-950 dark:text-neutral-50"
                  >
                    Lorem Ipsum
                  </label>
                </div>
              </div>
            ))}
          </div>
        </Form.Field>
      </div>
      <Button.Solid type="submit" color="white_black">
        Update display
      </Button.Solid>
    </Form.Root>
  );
}
