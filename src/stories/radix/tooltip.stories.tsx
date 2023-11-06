import type { Meta, StoryObj } from "@storybook/react";

import Tooltip from "@/ui/radix/tooltip";
import { TooltipDemo } from "@/demos/radix";

const meta = {
  title: "radix/Tooltip",
  component: Tooltip.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Tooltip.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TooltipStory: Story = {
  render: () => <TooltipDemo />,
};
