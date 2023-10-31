"use client";

import HoverCard from "@/ui/radix/hover-card";
import Image from "next/image";

export function HoverCardDemo() {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <a
          className="inline-block cursor-pointer outline-none"
          href="https://twitter.com/ColumpioLabs"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            className="block h-[45px] w-[45px]"
            src="https://github.com/ColumpioLabs.png"
            alt="Radix UI"
            width={400}
            height={400}
          />
        </a>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content>
          <div className="flex flex-col gap-[7px]">
            <Image
              className="block h-[60px] w-[60px]"
              src="https://github.com/ColumpioLabs.png"
              alt="Radix UI"
              width={400}
              height={400}
            />
            <div className="flex flex-col gap-[15px]">
              <div>
                <div className="m-0 text-[15px] font-medium leading-[1.5]">
                  Columpio Labs
                </div>
                <div className="m-0 text-[15px] leading-[1.5]">
                  @ColumpioLabs
                </div>
              </div>
              <div className="m-0 text-[15px] leading-[1.5]">
                Components, icons, colors, and templates for building
                high-quality, accessible UI.
              </div>
              <div className="flex gap-[15px]">
                <div className="flex gap-[5px]">
                  <div className="m-0 text-[15px] font-medium leading-[1.5]">
                    100
                  </div>{" "}
                  <div className="m-0 text-[15px] leading-[1.5]">Following</div>
                </div>
                <div className="flex gap-[5px]">
                  <div className="m-0 text-[15px] font-medium leading-[1.5]">
                    2,900
                  </div>{" "}
                  <div className="m-0 text-[15px] leading-[1.5]">Followers</div>
                </div>
              </div>
            </div>
          </div>

          <HoverCard.Arrow />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
