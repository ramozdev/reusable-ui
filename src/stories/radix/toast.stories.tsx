import type { Meta, StoryObj } from "@storybook/react";

import Toast from "@/ui/radix/toast";
import { ToastDemo } from "@/demos/radix";

const meta = {
  title: "radix/Toast",
  component: Toast.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Toast.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToastStory: Story = {
  render: () => <ToastDemo />,
};
