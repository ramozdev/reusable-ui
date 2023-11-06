import type { Meta, StoryObj } from "@storybook/react";

import ScrollArea from "@/ui/radix/scroll-area";
import { ScrollAreaDemo } from "@/demos/radix";

const meta = {
  title: "radix/ScrollArea",
  component: ScrollArea.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ScrollArea.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ScrollAreaStory: Story = {
  render: () => <ScrollAreaDemo />,
};
