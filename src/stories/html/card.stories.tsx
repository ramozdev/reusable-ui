import type { Meta, StoryObj } from "@storybook/react";

import Card from "@/ui/html/card";

const meta = {
  title: "HTML/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardStory: Story = {
  args: {
    children: (
      <p>
        Indicates that a value is required. Must be shown for any required
        field, even if all fields in the form are required.
      </p>
    ),
  },
};
