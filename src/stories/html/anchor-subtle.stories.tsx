import type { Meta, StoryObj } from "@storybook/react";

import Anchor from "@/ui/html/anchor";

const meta = {
  title: "HTML/Anchor.Subtle",
  component: Anchor.Subtle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Anchor.Subtle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnchorSubtleStory: Story = {
  args: {
    children: "Anchor.Subtle",
    href: "#",
  },
};
