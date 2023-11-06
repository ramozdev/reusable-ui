import type { Meta, StoryObj } from "@storybook/react";

import Anchor from "@/ui/html/anchor";

const meta = {
  title: "HTML/Anchor.Solid",
  component: Anchor.Solid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Anchor.Solid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnchorSolidStory: Story = {
  args: {
    children: "Anchor.Solid",
    href: "#",
  },
};
