"use client";

import React from "react";
import ContextMenu from "@/ui/radix/context-menu";
import {
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

export function ContextMenuDemo() {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className="block w-[300px] select-none rounded border-2 border-dashed border-neutral-400 py-[45px] text-center text-[15px] text-neutral-950">
        Right click here.
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content>
          <ContextMenu.Item>
            Back <ContextMenu.RightSlot>⌘+[</ContextMenu.RightSlot>
          </ContextMenu.Item>
          <ContextMenu.Item disabled>
            Foward <ContextMenu.RightSlot>⌘+]</ContextMenu.RightSlot>
          </ContextMenu.Item>
          <ContextMenu.Item>
            Reload <ContextMenu.RightSlot>⌘+R</ContextMenu.RightSlot>
          </ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger>
              More Tools
              <ContextMenu.RightSlot>
                <ChevronRightIcon />
              </ContextMenu.RightSlot>
            </ContextMenu.SubTrigger>
            <ContextMenu.Portal>
              <ContextMenu.SubContent>
                <ContextMenu.Item>
                  Save Page As…
                  <ContextMenu.RightSlot>⌘+S</ContextMenu.RightSlot>
                </ContextMenu.Item>
                <ContextMenu.Item>Create Shortcut…</ContextMenu.Item>
                <ContextMenu.Item>Name Window…</ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item>Developer Tools</ContextMenu.Item>
              </ContextMenu.SubContent>
            </ContextMenu.Portal>
          </ContextMenu.Sub>

          <ContextMenu.Separator />

          <ContextMenu.CheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <ContextMenu.ItemIndicator>
              <CheckIcon />
            </ContextMenu.ItemIndicator>
            Show Bookmarks <ContextMenu.RightSlot>⌘+B</ContextMenu.RightSlot>
          </ContextMenu.CheckboxItem>
          <ContextMenu.CheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <ContextMenu.ItemIndicator>
              <CheckIcon />
            </ContextMenu.ItemIndicator>
            Show Full URLs
          </ContextMenu.CheckboxItem>

          <ContextMenu.Separator />

          <ContextMenu.Label>People</ContextMenu.Label>
          <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
            <ContextMenu.RadioItem value="pedro">
              <ContextMenu.ItemIndicator>
                <DotFilledIcon />
              </ContextMenu.ItemIndicator>
              Columpio Labs
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="colm">
              <ContextMenu.ItemIndicator>
                <DotFilledIcon />
              </ContextMenu.ItemIndicator>
              Colm Tuite
            </ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}
