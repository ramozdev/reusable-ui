import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "@/ui/radix/avatar";
import { AvatarDemo } from "@/demos/radix";

const meta = {
  title: "radix/Avatar",
  component: Avatar.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Avatar.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarStory: Story = {
  render: () => <AvatarDemo />,
};
