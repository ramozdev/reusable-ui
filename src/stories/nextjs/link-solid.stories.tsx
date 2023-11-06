import type { Meta, StoryObj } from "@storybook/react";

import Link from "@/ui/nextjs/link";

const meta = {
  title: "HTML/Link.Solid",
  component: Link.Solid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      defaultValue: "default",
    },
  },
} satisfies Meta<typeof Link.Solid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkSolidStory: Story = {
  args: {
    children: "Link.Solid",
    href: "#",
  },
};
