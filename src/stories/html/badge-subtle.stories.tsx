import type { Meta, StoryObj } from "@storybook/react";

import Badge from "@/ui/html/badge";

const meta = {
  title: "HTML/Badge.Subtle",
  component: Badge.Subtle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Badge.Subtle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BadgeSubtleStory: Story = {
  args: {
    children: "Badge.Subtle",
  },
};
