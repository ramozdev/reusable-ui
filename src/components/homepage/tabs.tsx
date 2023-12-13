"use client";

import Tabs from "@/ui/radix/tabs";
import Label from "@/ui/html/label";
import { Fragment } from "react";
import Text from "@/ui/html/text";
import { colors } from "@/lib/colors";

export default function TabsDemo() {
  return (
    <div>
      <Text.H3>Tabs</Text.H3>
      <div className="grid w-96 grid-cols-2 gap-y-4">
        {colors.map((color) => (
          <Fragment key={`tabs-${color}`}>
            <Label>{color}</Label>
            <Tabs.Root defaultValue="tab1" color={color}>
              <Tabs.List aria-label="Manage your account" color={color}>
                <Tabs.Trigger value="tab1" color={color}>
                  Account
                </Tabs.Trigger>
                <Tabs.Trigger value="tab2" color={color}>
                  Password
                </Tabs.Trigger>
              </Tabs.List>
            </Tabs.Root>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
