import type { Meta, StoryObj } from "@storybook/react";

import Collapsible from "@/ui/radix/collapsible";
import { CollapsibleDemo } from "@/demos/radix";

const meta = {
  title: "radix/Collapsible",
  component: Collapsible.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Collapsible.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CollapsibleStory: Story = {
  render: () => <CollapsibleDemo />,
};
