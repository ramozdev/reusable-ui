import type { Meta, StoryObj } from "@storybook/react";

import Command from "@/ui/cmdk";
import { CommandDemo } from "@/demos/cmdk";

const meta = {
  title: "radix/Command",
  component: Command.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Command.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CommandStory: Story = {
  render: () => <CommandDemo />,
};
