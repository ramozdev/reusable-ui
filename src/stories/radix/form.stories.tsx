import type { Meta, StoryObj } from "@storybook/react";

import Form from "@/ui/radix/form";
import { FormDemo } from "@/demos/radix";

const meta = {
  title: "radix/Form",
  component: Form.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Form.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormStory: Story = {
  render: () => <FormDemo />,
};
