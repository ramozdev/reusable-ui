"use client";

import { colors } from "@/lib/colors";
import Text from "@/ui/html/text";
import Separator from "@/ui/radix/separator";
import { Fragment } from "react";

export default function SeparatorDemo() {
  return (
    <div>
      <Text.H3>Separator</Text.H3>

      <div className="grid w-96 grid-cols-2 gap-y-4">
        {colors.map((color) => (
          <Fragment key={color}>
            <p className="font-semibold">{color}</p>
            <div className="mx-[15px] w-full max-w-[300px]">
              <div className="text-[15px] font-medium leading-5 text-black dark:text-white">
                Radix Primitives
              </div>
              <div className="text-[15px] leading-5 text-black dark:text-white">
                An open-source UI component library.
              </div>
              <Separator.Root color={color} />
              <div className="flex h-5 items-center">
                <div className="text-[15px] leading-5 text-black dark:text-white">
                  Blog
                </div>
                <Separator.Root
                  color={color}
                  decorative
                  orientation="vertical"
                />
                <div className="text-[15px] leading-5 text-black dark:text-white">
                  Docs
                </div>
                <Separator.Root
                  color={color}
                  decorative
                  orientation="vertical"
                />
                <div className="text-[15px] leading-5 text-black dark:text-white">
                  Source
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
