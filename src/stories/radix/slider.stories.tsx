import type { Meta, StoryObj } from "@storybook/react";

import Slider from "@/ui/radix/slider";
import { SliderDemo } from "@/demos/radix";

const meta = {
  title: "radix/Slider",
  component: Slider.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Slider.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SliderStory: Story = {
  render: () => <SliderDemo />,
};
