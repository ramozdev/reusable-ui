"use client";

import Image from "next/image";
import AspectRatio from "@/ui/radix/aspect-ratio";
import { Fragment } from "react";
import Text from "@/ui/html/text";

export function AspectRatioDemo() {
  return (
    <Fragment>
      <Text.H3>Aspect Ratio</Text.H3>
      <div className="flex gap-8">
        <div className="w-[300px]">
          <AspectRatio.Root ratio={2 / 3}>
            <Image
              src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
              alt="Photo by John Doe"
              width={1200}
              height={800}
            />
          </AspectRatio.Root>
        </div>
        <div className="w-[300px]">
          <AspectRatio.Root ratio={1 / 1}>
            <Image
              src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
              alt="Photo by John Doe"
              width={1200}
              height={800}
            />
          </AspectRatio.Root>
        </div>
        <div className="w-[300px]">
          <AspectRatio.Root ratio={16 / 9}>
            <Image
              src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
              alt="Photo by John Doe"
              width={1200}
              height={800}
            />
          </AspectRatio.Root>
        </div>
      </div>
    </Fragment>
  );
}
