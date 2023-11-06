import type { Meta, StoryObj } from "@storybook/react";

import Legend from "@/ui/html/legend";

const meta = {
  title: "HTML/Legend",
  component: Legend,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Legend>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LegendStory: Story = {
  args: {},
};
