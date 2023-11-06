import type { Meta, StoryObj } from "@storybook/react";

import Select from "@/ui/html/select";

const meta = {
  title: "HTML/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectStory: Story = {
  args: {},
};
