import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "@/ui/html/checkbox";

const meta = {
  title: "HTML/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxStory: Story = {
  args: {},
};
