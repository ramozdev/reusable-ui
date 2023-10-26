"use client";

import Image from "next/image";
import AspectRatio from "@/ui/radix/aspect-ratio";

export function AspectRatioDemo() {
  return (
    <div className="w-[300px] overflow-hidden rounded-md">
      <AspectRatio.Root ratio={16 / 9}>
        <Image
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Photo by John Doe"
          width={600}
          height={902}
        />
      </AspectRatio.Root>
    </div>
  );
}
