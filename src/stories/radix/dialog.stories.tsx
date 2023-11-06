import type { Meta, StoryObj } from "@storybook/react";

import Dialog from "@/ui/radix/dialog";
import { DialogDemo } from "@/demos/radix";

const meta = {
  title: "radix/Dialog",
  component: Dialog.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DialogStory: Story = {
  render: () => <DialogDemo />,
};
