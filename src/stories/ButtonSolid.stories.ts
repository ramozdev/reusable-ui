import type { Meta, StoryObj } from "@storybook/react";

import * as Button from "@/ui/html/button";

const meta = {
  title: "HTML/Button.Solid",
  component: Button.Solid,
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
} satisfies Meta<typeof Button.Solid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};
