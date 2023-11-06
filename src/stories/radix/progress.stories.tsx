import type { Meta, StoryObj } from "@storybook/react";

import Progress from "@/ui/radix/progress";
import { ProgressDemo } from "@/demos/radix";

const meta = {
  title: "radix/Progress",
  component: Progress.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Progress.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressStory: Story = {
  render: () => <ProgressDemo />,
};
