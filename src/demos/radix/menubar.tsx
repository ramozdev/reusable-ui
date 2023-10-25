"use client";

import React from "react";
import * as Menubar from "@/ui/radix/menubar";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";

const RADIO_ITEMS = ["Andy", "Benoît", "Luis"];
const CHECK_ITEMS = ["Always Show Bookmarks Bar", "Always Show Full URLs"];

export function MenubarDemo() {
  const [checkedSelection, setCheckedSelection] = React.useState([
    CHECK_ITEMS[1],
  ]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content>
            <Menubar.Item>
              New Tab <Menubar.RightSlot>⌘ T</Menubar.RightSlot>
            </Menubar.Item>
            <Menubar.Item>
              New Window <Menubar.RightSlot>⌘ N</Menubar.RightSlot>
            </Menubar.Item>
            <Menubar.Item disabled>New Incognito Window</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Sub>
              <Menubar.SubTrigger>
                Share
                <Menubar.RightSlot>
                  <ChevronRightIcon />
                </Menubar.RightSlot>
              </Menubar.SubTrigger>
              <Menubar.Portal>
                <Menubar.SubContent alignOffset={-5}>
                  <Menubar.Item>Email Link</Menubar.Item>
                  <Menubar.Item>Messages</Menubar.Item>
                  <Menubar.Item>Notes</Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Portal>
            </Menubar.Sub>
            <Menubar.Separator />
            <Menubar.Item>
              Print… <Menubar.RightSlot>⌘ P</Menubar.RightSlot>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content>
            <Menubar.Item>
              Undo <Menubar.RightSlot>⌘ Z</Menubar.RightSlot>
            </Menubar.Item>
            <Menubar.Item>
              Redo <Menubar.RightSlot>⇧ ⌘ Z</Menubar.RightSlot>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Sub>
              <Menubar.SubTrigger>
                Find
                <Menubar.RightSlot>
                  <ChevronRightIcon />
                </Menubar.RightSlot>
              </Menubar.SubTrigger>

              <Menubar.Portal>
                <Menubar.SubContent alignOffset={-5}>
                  <Menubar.Item>Search the web…</Menubar.Item>
                  <Menubar.Separator />
                  <Menubar.Item>Find…</Menubar.Item>
                  <Menubar.Item>Find Next</Menubar.Item>
                  <Menubar.Item>Find Previous</Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Portal>
            </Menubar.Sub>
            <Menubar.Separator />
            <Menubar.Item>Cut</Menubar.Item>
            <Menubar.Item>Copy</Menubar.Item>
            <Menubar.Item>Paste</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content alignOffset={-14}>
            {CHECK_ITEMS.map((item) => (
              <Menubar.CheckboxItem
                key={item}
                checked={checkedSelection.includes(item)}
                onCheckedChange={() =>
                  setCheckedSelection((current) =>
                    current.includes(item)
                      ? current.filter((el) => el !== item)
                      : current.concat(item),
                  )
                }
              >
                <Menubar.ItemIndicator>
                  <CheckIcon />
                </Menubar.ItemIndicator>
                {item}
              </Menubar.CheckboxItem>
            ))}
            <Menubar.Separator />
            <Menubar.Item>
              Reload <Menubar.RightSlot>⌘ R</Menubar.RightSlot>
            </Menubar.Item>
            <Menubar.Item disabled>
              Force Reload <Menubar.RightSlot>⇧ ⌘ R</Menubar.RightSlot>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Toggle Fullscreen</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item>Hide Sidebar</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger>Profiles</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content alignOffset={-14}>
            <Menubar.RadioGroup
              value={radioSelection}
              onValueChange={setRadioSelection}
            >
              {RADIO_ITEMS.map((item) => (
                <Menubar.RadioItem key={item} value={item}>
                  <Menubar.ItemIndicator>
                    <DotFilledIcon />
                  </Menubar.ItemIndicator>
                  {item}
                </Menubar.RadioItem>
              ))}
              <Menubar.Separator />
              <Menubar.Item>Edit…</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item>Add Profile…</Menubar.Item>
            </Menubar.RadioGroup>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
}
