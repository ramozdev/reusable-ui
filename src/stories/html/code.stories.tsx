import type { Meta, StoryObj } from "@storybook/react";

import Code from "@/ui/html/code";

const meta = {
  title: "HTML/Code",
  component: Code,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CodeStory: Story = {
  args: {
    children: "code",
  },
};
