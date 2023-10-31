"use client";

import Avatar from "@/ui/radix/avatar";

export function AvatarDemo() {
  return (
    <div className="flex gap-5">
      <Avatar.Root>
        <Avatar.Image
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
        <Avatar.Fallback>CT</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Image
          src="https://github.com/ColumpioLabs.png"
          alt="Columpio Labs"
        />
        <Avatar.Fallback>DR</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback>PD</Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
}
