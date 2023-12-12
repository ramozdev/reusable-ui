"use client";

import Button from "@/ui/html/button";
import TextInput from "@/ui/html/text-input";

export function ProfileForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-8">
      <div>
        <TextInput
          id="username"
          type="text"
          caption="This username will be visible to others"
          validation="This username is already taken"
        >
          Username
        </TextInput>
      </div>

      {/* email */}
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

      {/* text */}
      <div>
        <TextInput
          id="bio"
          type="text"
          caption="This note will be visible to others"
          validation="This note is already taken"
        >
          Note
        </TextInput>
      </div>
      <div>
        <div>
          <div>
            <TextInput
              id="bio"
              type="url"
              caption="This bio will be visible to others"
              validation="This bio is already taken"
            >
              Url
            </TextInput>
          </div>
        </div>
        <Button.Solid
          type="button"
          variant="outline"
          color="white-black"
          className="mt-2"
        >
          Add URL
        </Button.Solid>
      </div>
      <Button.Solid type="submit" color="white-black">
        Update profile
      </Button.Solid>
    </form>
  );
}
