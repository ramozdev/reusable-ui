import type { Meta, StoryObj } from "@storybook/react";

import Link from "@/ui/nextjs/link";

const meta = {
  title: "HTML/Link.Subtle",
  component: Link.Subtle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Link.Subtle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkSubtleStory: Story = {
  args: {
    children: "Link.Subtle",
    href: "#",
  },
};
