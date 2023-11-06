import type { Meta, StoryObj } from "@storybook/react";

import Label from "@/ui/radix/label";
import { LabelDemo } from "@/demos/radix";

const meta = {
  title: "radix/Label",
  component: Label.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Label.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelStory: Story = {
  render: () => <LabelDemo />,
};
