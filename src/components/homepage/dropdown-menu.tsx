"use client";

import { colors } from "@/lib/colors";
import Button from "@/ui/html/button";
import Text from "@/ui/html/text";
import DropdownMenu from "@/ui/radix/dropdown-menu";
import { ChevronRightIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Fragment } from "react";

export default function DropdownMenuDemo() {
  return (
    <div>
      <Text.H3>Dropdown Menu</Text.H3>
      <div className="grid w-96 grid-cols-2 gap-y-4">
        {colors.map((color) => (
          <Fragment key={color}>
            <p className="font-semibold">{color}</p>
            <div className="flex space-x-2">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Button.Solid
                    color={color}
                    size="icon"
                    aria-label="Customise options"
                  >
                    <HamburgerMenuIcon />
                  </Button.Solid>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content color={color}>
                    <DropdownMenu.Item color={color}>
                      Back{" "}
                      <DropdownMenu.RightSlot color={color}>
                        ⌘+[
                      </DropdownMenu.RightSlot>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item color={color} disabled>
                      Foward{" "}
                      <DropdownMenu.RightSlot color={color}>
                        ⌘+]
                      </DropdownMenu.RightSlot>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item color={color}>
                      Reload{" "}
                      <DropdownMenu.RightSlot color={color}>
                        ⌘+R
                      </DropdownMenu.RightSlot>
                    </DropdownMenu.Item>
                    <DropdownMenu.Sub>
                      <DropdownMenu.SubTrigger color={color}>
                        More Tools
                        <DropdownMenu.RightSlot color={color}>
                          <ChevronRightIcon />
                        </DropdownMenu.RightSlot>
                      </DropdownMenu.SubTrigger>
                      <DropdownMenu.Portal>
                        <DropdownMenu.SubContent color={color}>
                          <DropdownMenu.Item color={color}>
                            Save Page As…
                            <DropdownMenu.RightSlot>⌘+S</DropdownMenu.RightSlot>
                          </DropdownMenu.Item>
                          <DropdownMenu.Item color={color}>
                            Create Shortcut…
                          </DropdownMenu.Item>
                          <DropdownMenu.Item color={color}>
                            Name Window…
                          </DropdownMenu.Item>
                          <DropdownMenu.Separator color={color} />
                          <DropdownMenu.Item color={color}>
                            Developer Tools
                          </DropdownMenu.Item>
                        </DropdownMenu.SubContent>
                      </DropdownMenu.Portal>
                    </DropdownMenu.Sub>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
