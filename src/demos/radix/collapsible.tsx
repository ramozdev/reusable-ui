"use client";

import React from "react";
import Collapsible from "@/ui/radix/collapsible";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
import Button from "@/ui/html/button";
import Card from "@/ui/html/card";

export function CollapsibleDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="text-[15px] leading-[25px]">
          @peduarte starred 3 repositories
        </span>
        <Collapsible.Trigger asChild>
          <Button.Solid size="icon" color="neutral" variant="outline">
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </Button.Solid>
        </Collapsible.Trigger>
      </div>

      <Card className="my-3 p-3">
        <span className="text-[15px] leading-[25px]">@radix-ui/primitives</span>
      </Card>

      <Collapsible.Content>
        <Card className="my-3 p-3">
          <span className="text-[15px] leading-[25px]">@radix-ui/colors</span>
        </Card>
        <Card className="my-3 p-3">
          <span className="text-[15px] leading-[25px]">@stitches/react</span>
        </Card>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
