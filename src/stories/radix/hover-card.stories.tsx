import type { Meta, StoryObj } from "@storybook/react";

import HoverCard from "@/ui/radix/hover-card";
import { HoverCardDemo } from "@/demos/radix";

const meta = {
  title: "radix/HoverCard",
  component: HoverCard.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof HoverCard.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HoverCardStory: Story = {
  render: () => <HoverCardDemo />,
};
