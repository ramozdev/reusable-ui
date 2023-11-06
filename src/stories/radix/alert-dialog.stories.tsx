import type { Meta, StoryObj } from "@storybook/react";

import AlertDialog from "@/ui/radix/alert-dialog";
import { AlertDialogDemo } from "@/demos/radix";

const meta = {
  title: "radix/AlertDialog",
  component: AlertDialog.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AlertDialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertDialogStory: Story = {
  render: () => <AlertDialogDemo />,
};
