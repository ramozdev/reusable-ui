import type { Meta, StoryObj } from "@storybook/react";

import AspectRatio from "@/ui/radix/aspect-ratio";
import { AspectRatioDemo } from "@/demos/radix";

const meta = {
  title: "radix/AspectRatio",
  component: AspectRatio.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AspectRatio.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AspectRatioStory: Story = {
  render: () => <AspectRatioDemo />,
};
