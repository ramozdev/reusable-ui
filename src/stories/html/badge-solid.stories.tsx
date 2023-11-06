import type { Meta, StoryObj } from "@storybook/react";

import Badge from "@/ui/html/badge";

const meta = {
  title: "HTML/Badge.Solid",
  component: Badge.Solid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Badge.Solid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BadgeSolidStory: Story = {
  args: {
    children: "Badge.Solid",
  },
};
