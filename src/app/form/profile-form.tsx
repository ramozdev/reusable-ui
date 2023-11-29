"use client";

import Button from "@/ui/html/button";
import Input from "@/ui/html/input";
import Label from "@/ui/html/label";
import Textarea from "@/ui/html/textarea";

export function ProfileForm() {
  return (
    <form
      onSubmit={(e: React.FormEvent) => e.preventDefault()}
      className="w-full space-y-8"
    >
      <div>
        <Label required>Username</Label>
        <Input type="text" required className="w-full" />
      </div>

      {/* email */}
      <div>
        <Label required>Email</Label>
        <Input type="email" required className="w-full" />
      </div>

      {/* text */}
      <div>
        <Label required>Bio</Label>

        <Textarea required className="w-full" />
      </div>
      <div>
        <div>
          <Label required>URLs</Label>
          <Input type="url" required className="w-full" />
        </div>
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
    </form>
  );
}
