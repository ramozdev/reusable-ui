import type { Meta, StoryObj } from "@storybook/react";

import RadioGroup from "@/ui/radix/radio-group";
import { RadioGroupDemo } from "@/demos/radix";

const meta = {
  title: "radix/RadioGroup",
  component: RadioGroup.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof RadioGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioGroupStory: Story = {
  render: () => <RadioGroupDemo />,
};
