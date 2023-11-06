import type { Meta, StoryObj } from "@storybook/react";

import Toggle from "@/ui/radix/toggle";
import { ToggleDemo } from "@/demos/radix";

const meta = {
  title: "radix/Toggle",
  component: Toggle.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toggle.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleStory: Story = {
  render: () => <ToggleDemo />,
};
