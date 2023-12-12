"use client";

import { colors } from "@/lib/colors";
import Text from "@/ui/html/text";
import ScrollArea from "@/ui/radix/scroll-area";
import { Fragment } from "react";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v12.28.39-beta.${a.length - i}`,
);

export function ScrollAreaDemo() {
  return (
    <div>
      <Text.H3>Select</Text.H3>
      <div className="grid w-96 grid-cols-2 gap-y-4">
        {colors.map((color) => (
          <Fragment key={color}>
            <p className="font-semibold">{color}</p>
            <ScrollArea.Root color={color} className="w-[130px]">
              <ScrollArea.Viewport>
                <div className="text-sm font-medium">Tags</div>
                {tags.map((tag) => (
                  <div
                    className="mt-3 whitespace-nowrap pt-3 text-sm"
                    key={tag}
                  >
                    {tag}
                  </div>
                ))}
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar color={color} orientation="vertical">
                <ScrollArea.Thumb color={color} />
              </ScrollArea.Scrollbar>
              <ScrollArea.Scrollbar color={color} orientation="horizontal">
                <ScrollArea.Thumb color={color} />
              </ScrollArea.Scrollbar>
              <ScrollArea.Corner color={color} />
            </ScrollArea.Root>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
