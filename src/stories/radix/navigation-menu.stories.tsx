import type { Meta, StoryObj } from "@storybook/react";

import NavigationMenu from "@/ui/radix/navigation-menu";
import { NavigationMenuDemo } from "@/demos/radix";

const meta = {
  title: "radix/NavigationMenu",
  component: NavigationMenu.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NavigationMenu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationMenuStory: Story = {
  render: () => <NavigationMenuDemo />,
};
