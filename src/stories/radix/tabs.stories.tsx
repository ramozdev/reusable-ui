import type { Meta, StoryObj } from "@storybook/react";

import Tabs from "@/ui/radix/tabs";
import { TabsDemo } from "@/demos/radix";

const meta = {
  title: "radix/Tabs",
  component: Tabs.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tabs.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsStory: Story = {
  render: () => <TabsDemo />,
};
