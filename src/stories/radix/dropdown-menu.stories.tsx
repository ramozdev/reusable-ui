import type { Meta, StoryObj } from "@storybook/react";

import DropdownMenu from "@/ui/radix/dropdown-menu";
import { DropdownMenuDemo } from "@/demos/radix";

const meta = {
  title: "radix/DropdownMenu",
  component: DropdownMenu.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof DropdownMenu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownMenuStory: Story = {
  render: () => <DropdownMenuDemo />,
};
