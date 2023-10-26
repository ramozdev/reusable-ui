"use client";

import ScrollArea from "@/ui/radix/scroll-area";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v12.28.39-beta.${a.length - i}`,
);

export function ScrollAreaDemo() {
  return (
    <ScrollArea.Root className="w-[130px]">
      <ScrollArea.Viewport>
        <div className="text-sm font-medium">Tags</div>
        {tags.map((tag) => (
          <div className="mt-3 whitespace-nowrap pt-3 text-sm" key={tag}>
            {tag}
          </div>
        ))}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}
