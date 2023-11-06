import type { Meta, StoryObj } from "@storybook/react";

import Menubar from "@/ui/radix/menubar";
import { MenubarDemo } from "@/demos/radix";

const meta = {
  title: "radix/Menubar",
  component: Menubar.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Menubar.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenubarStory: Story = {
  render: () => <MenubarDemo />,
};
