"use client";

import Toolbar from "@/ui/radix/toolbar";
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from "@radix-ui/react-icons";

export function ToolbarDemo() {
  return (
    <Toolbar.Root aria-label="Formatting options">
      <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
        <Toolbar.ToggleItem value="bold" aria-label="Bold">
          <FontBoldIcon />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="italic" aria-label="Italic">
          <FontItalicIcon />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="strikethrough" aria-label="Strike through">
          <StrikethroughIcon />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>
      <Toolbar.Separator />
      <Toolbar.ToggleGroup
        type="single"
        defaultValue="center"
        aria-label="Text alignment"
      >
        <Toolbar.ToggleItem value="left" aria-label="Left aligned">
          <TextAlignLeftIcon />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="center" aria-label="Center aligned">
          <TextAlignCenterIcon />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value="right" aria-label="Right aligned">
          <TextAlignRightIcon />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>
      <Toolbar.Separator />
      <Toolbar.Link href="#" target="_blank" className="mr-4">
        Edited 2 hours ago
      </Toolbar.Link>
      <Toolbar.Button>Share</Toolbar.Button>
    </Toolbar.Root>
  );
}
