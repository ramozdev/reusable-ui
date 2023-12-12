"use client";

import { colors } from "@/lib/colors";
import Text from "@/ui/html/text";
import ContextMenu from "@/ui/radix/context-menu";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Fragment } from "react";

export default function ContextMenuDemo() {
  return (
    <div>
      <Text.H3>ContextMenu</Text.H3>
      <div className="grid w-96 grid-cols-2 gap-y-4">
        {colors.map((color) => (
          <Fragment key={color}>
            <p className="font-semibold">{color}</p>
            <div className="flex space-x-2">
              <ContextMenu.Root>
                <ContextMenu.Trigger
                  color={color}
                  className="block select-none rounded border-2 border-dashed border-neutral-400 px-2 py-1 text-center text-neutral-950 dark:text-white"
                >
                  Right click here.
                </ContextMenu.Trigger>
                <ContextMenu.Portal>
                  <ContextMenu.Content color={color}>
                    <ContextMenu.Item color={color}>
                      Back{" "}
                      <ContextMenu.RightSlot color={color}>
                        ⌘+[
                      </ContextMenu.RightSlot>
                    </ContextMenu.Item>
                    <ContextMenu.Item color={color} disabled>
                      Foward{" "}
                      <ContextMenu.RightSlot color={color}>
                        ⌘+]
                      </ContextMenu.RightSlot>
                    </ContextMenu.Item>
                    <ContextMenu.Item color={color}>
                      Reload{" "}
                      <ContextMenu.RightSlot color={color}>
                        ⌘+R
                      </ContextMenu.RightSlot>
                    </ContextMenu.Item>
                    <ContextMenu.Sub>
                      <ContextMenu.SubTrigger color={color}>
                        More Tools
                        <ContextMenu.RightSlot color={color}>
                          <ChevronRightIcon />
                        </ContextMenu.RightSlot>
                      </ContextMenu.SubTrigger>
                      <ContextMenu.Portal>
                        <ContextMenu.SubContent color={color}>
                          <ContextMenu.Item color={color}>
                            Save Page As…
                            <ContextMenu.RightSlot>⌘+S</ContextMenu.RightSlot>
                          </ContextMenu.Item>
                          <ContextMenu.Item color={color}>
                            Create Shortcut…
                          </ContextMenu.Item>
                          <ContextMenu.Item color={color}>
                            Name Window…
                          </ContextMenu.Item>
                          <ContextMenu.Separator color={color} />
                          <ContextMenu.Item color={color}>
                            Developer Tools
                          </ContextMenu.Item>
                        </ContextMenu.SubContent>
                      </ContextMenu.Portal>
                    </ContextMenu.Sub>
                  </ContextMenu.Content>
                </ContextMenu.Portal>
              </ContextMenu.Root>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
