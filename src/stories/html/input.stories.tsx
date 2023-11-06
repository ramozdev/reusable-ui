import type { Meta, StoryObj } from "@storybook/react";

import Input from "@/ui/html/input";

const meta = {
  title: "HTML/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputStory: Story = {
  args: {
    placeholder: "Input",
  },
};
