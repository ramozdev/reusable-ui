import type { Meta, StoryObj } from "@storybook/react";

import Kbd from "@/ui/html/kbd";

const meta = {
  title: "HTML/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const KbdStory: Story = {
  args: {
    children: "kbd",
  },
};
