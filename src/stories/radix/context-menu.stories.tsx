import type { Meta, StoryObj } from "@storybook/react";

import ContextMenu from "@/ui/radix/context-menu";
import { ContextMenuDemo } from "@/demos/radix";

const meta = {
  title: "radix/ContextMenu",
  component: ContextMenu.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ContextMenu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContextMenuStory: Story = {
  render: () => <ContextMenuDemo />,
};
