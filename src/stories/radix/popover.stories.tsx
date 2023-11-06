import type { Meta, StoryObj } from "@storybook/react";

import Popover from "@/ui/radix/popover";
import { PopoverDemo } from "@/demos/radix";

const meta = {
  title: "radix/Popover",
  component: Popover.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Popover.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PopoverStory: Story = {
  render: () => <PopoverDemo />,
};
