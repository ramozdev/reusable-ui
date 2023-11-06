import type { Meta, StoryObj } from "@storybook/react";

import Textarea from "@/ui/html/textarea";

const meta = {
  title: "HTML/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextareaStory: Story = {
  args: {
    placeholder: "Textarea",
  },
};
