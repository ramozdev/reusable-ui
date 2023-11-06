import type { Meta, StoryObj } from "@storybook/react";

import Select from "@/ui/radix/select";
import { SelectDemo } from "@/demos/radix";

const meta = {
  title: "radix/Select",
  component: Select.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Select.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectStory: Story = {
  render: () => <SelectDemo />,
};
