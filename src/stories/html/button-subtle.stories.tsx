import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/ui/html/button";

const meta = {
  title: "HTML/Button.Subtle",
  component: Button.Subtle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      defaultValue: "medium",
    },
    variant: {
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Button.Subtle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonSubtleStory: Story = {
  args: {
    children: "Button",
  },
};
