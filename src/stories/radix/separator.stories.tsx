import type { Meta, StoryObj } from "@storybook/react";

import Separator from "@/ui/radix/separator";
import { SeparatorDemo } from "@/demos/radix";

const meta = {
  title: "radix/Separator",
  component: Separator.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Separator.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SeparatorStory: Story = {
  render: () => <SeparatorDemo />,
};
