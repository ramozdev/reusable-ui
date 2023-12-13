"use client";

import Label from "@/ui/html/label";
import { colors } from "@/lib/colors";
import HoverCard from "@/ui/radix/hover-card";
import Image from "next/image";
import { Fragment } from "react";
import Text from "@/ui/html/text";

export function HoverCardDemo() {
  return (
    <div>
      <Text.H3>Hover Card</Text.H3>
      <div className="grid w-96 grid-cols-2 gap-y-4">
        {colors.map((color) => (
          <Fragment key={`hover-${color}`}>
            <Label>{color}</Label>
            <HoverCard.Root>
              <HoverCard.Trigger asChild>
                <a
                  className="inline-block cursor-pointer outline-none"
                  href="https://twitter.com/ColumpioLabs"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Label color={color}>Columpio Labs</Label>
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
                          <div className="m-0 text-[15px] leading-[1.5]">
                            Following
                          </div>
                        </div>
                        <div className="flex gap-[5px]">
                          <div className="m-0 text-[15px] font-medium leading-[1.5]">
                            2,900
                          </div>{" "}
                          <div className="m-0 text-[15px] leading-[1.5]">
                            Followers
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <HoverCard.Arrow />
                </HoverCard.Content>
              </HoverCard.Portal>
            </HoverCard.Root>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
