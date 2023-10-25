"use client";

import * as React from "react";
import * as Command from "@/ui/cmdk";
import {
  CalendarIcon,
  FaceIcon,
  FileTextIcon,
  GearIcon,
  MixIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

export function CommandDemo() {
  const [open, setOpen] = React.useState(false);

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.key === "k" && event.metaKey) {
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {!open && (
        <pre className="text-xl">
          Press <kbd>⌘ K</kbd>
        </pre>
      )}
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
      >
        <Command.Root>
          <Command.Input placeholder="Type a command. or search..." />
          <Command.Separator />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>
            <Command.Group heading="Suggestions">
              <Command.Item>
                <CalendarIcon className="mr-2" />
                <span>Calendar</span>
              </Command.Item>
              <Command.Item>
                <FaceIcon className="mr-2" />
                <span>Search Emoji</span>
              </Command.Item>
              <Command.Item>
                <MixIcon className="mr-2" />
                <span>Calculator</span>
              </Command.Item>
            </Command.Group>
            <Command.Separator />
            <Command.Group heading="Settings">
              <Command.Item>
                <PersonIcon className="mr-2" />
                <span>Profile</span>
                <Command.Shortcut>⌘ P</Command.Shortcut>
              </Command.Item>
              <Command.Item>
                <FileTextIcon className="mr-2" />
                <span>Billing</span>
                <Command.Shortcut>⌘ B</Command.Shortcut>
              </Command.Item>
              <Command.Item>
                <GearIcon className="mr-2" />
                <span>Settings</span>
                <Command.Shortcut>⌘ S</Command.Shortcut>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command.Root>
      </Command.Dialog>
    </>
  );
}
