import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "@/ui/radix/checkbox";
import { CheckboxDemo } from "@/demos/radix";

const meta = {
  title: "radix/Checkbox",
  component: Checkbox.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Checkbox.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxStory: Story = {
  render: () => <CheckboxDemo />,
};
