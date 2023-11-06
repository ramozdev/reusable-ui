import type { Meta, StoryObj } from "@storybook/react";

import Link from "@/ui/nextjs/link";

const meta = {
  title: "HTML/Link.Underline",
  component: Link.Underline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Link.Underline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkUnderlineStory: Story = {
  args: {
    children: "Link.Underline",
    href: "#",
  },
};
