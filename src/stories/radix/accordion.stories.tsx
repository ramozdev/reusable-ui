import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "@/ui/radix/accordion";
import { AccordionDemo } from "@/demos/radix";

const meta = {
  title: "radix/Accordion",
  component: Accordion.Root,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Accordion.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionStory: Story = {
  args: {
    type: "single",
    collapsible: true,
    defaultValue: "item-1",
  },
  render: (args) => <AccordionDemo {...args} />,
};
