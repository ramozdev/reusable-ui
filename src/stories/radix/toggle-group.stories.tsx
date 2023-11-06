import type { Meta, StoryObj } from "@storybook/react";

import ToggleGroup from "@/ui/radix/toggle-group";
import { ToggleGroupDemo } from "@/demos/radix";

const meta = {
  title: "radix/ToggleGroup",
  component: ToggleGroup.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ToggleGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleGroupStory: Story = {
  args: {
    type: "single",
  },
  render: () => <ToggleGroupDemo />,
};
