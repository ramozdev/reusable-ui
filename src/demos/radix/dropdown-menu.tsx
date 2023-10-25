"use client";

import React from "react";
import * as DropdownMenu from "@/ui/radix/dropdown-menu";
import * as Button from "@/ui/html/button";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

export function DropdownMenuDemo() {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState("pedro");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button.Solid
          color="neutral"
          size="icon"
          className="rounded-full"
          aria-label="Customise options"
        >
          <HamburgerMenuIcon />
        </Button.Solid>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            New Tab <DropdownMenu.RightSlot>⌘+T</DropdownMenu.RightSlot>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            New Window <DropdownMenu.RightSlot>⌘+N</DropdownMenu.RightSlot>
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled>
            New Private Window
            <DropdownMenu.RightSlot>⇧+⌘+N</DropdownMenu.RightSlot>
          </DropdownMenu.Item>
          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>
              More Tools
              <DropdownMenu.RightSlot>
                <ChevronRightIcon />
              </DropdownMenu.RightSlot>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>
                  Save Page As…
                  <DropdownMenu.RightSlot>⌘+S</DropdownMenu.RightSlot>
                </DropdownMenu.Item>
                <DropdownMenu.Item>Create Shortcut…</DropdownMenu.Item>
                <DropdownMenu.Item>Name Window…</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Developer Tools</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />

          <DropdownMenu.CheckboxItem
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator>
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Bookmarks <DropdownMenu.RightSlot>⌘+B</DropdownMenu.RightSlot>
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator>
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator />

          <DropdownMenu.Label>People</DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem value="pedro">
              <DropdownMenu.ItemIndicator>
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Momentum Labz
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="colm">
              <DropdownMenu.ItemIndicator>
                <DotFilledIcon />
              </DropdownMenu.ItemIndicator>
              Juan Pérez
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
