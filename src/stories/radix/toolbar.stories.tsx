import type { Meta, StoryObj } from "@storybook/react";

import Toolbar from "@/ui/radix/toolbar";
import { ToolbarDemo } from "@/demos/radix";

const meta = {
  title: "radix/Toolbar",
  component: Toolbar.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toolbar.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToolbarStory: Story = {
  render: () => <ToolbarDemo />,
};
