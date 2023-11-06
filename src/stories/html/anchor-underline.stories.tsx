import type { Meta, StoryObj } from "@storybook/react";

import Anchor from "@/ui/html/anchor";

const meta = {
  title: "HTML/Anchor.Underline",
  component: Anchor.Underline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Anchor.Underline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnchorUnderlineStory: Story = {
  args: {
    children: "Anchor.Underline",
    href: "#",
  },
};
