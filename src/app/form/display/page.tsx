"use client";

import Button from "@/ui/html/button";
import Checkbox from "@/ui/html/checkbox";
import Label from "@/ui/html/label";
import TextInput from "@/ui/html/textinput";

export default function DisplayForm() {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="w-full space-y-8"
    >
      <div>
        <div>
          <Label required>Sidebar</Label>
          <br />
          <span className="text-sm text-neutral-950 dark:text-neutral-50">
            {" "}
            Select the items you want to display in the sidebar
          </span>

          <div className="my-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i}>
                <div className="my-2 space-x-1">
                  <Checkbox
                    name="accept"
                    id={`accept${i}`}
                    className="h-4 w-4"
                  />
                  <label
                    htmlFor={`accept${i}`}
                    className="text-neutral-950 dark:text-neutral-50"
                  >
                    Lorem Ipsum
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
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
      </div>
      <Button.Solid type="submit" color="white-black">
        Update display
      </Button.Solid>
    </form>
  );
}
