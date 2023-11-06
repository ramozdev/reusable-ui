import type { Meta, StoryObj } from "@storybook/react";

import Swtich from "@/ui/radix/switch";
import { SwitchDemo } from "@/demos/radix";

const meta = {
  title: "radix/Swtich",
  component: Swtich.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Swtich.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwtichStory: Story = {
  render: () => <SwitchDemo />,
};
