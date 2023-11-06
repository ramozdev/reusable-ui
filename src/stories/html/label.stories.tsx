import type { Meta, StoryObj } from "@storybook/react";

import Label from "@/ui/html/label";

const meta = {
  title: "HTML/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LabelStory: Story = {
  args: {
    children: "Label",
  },
};
