import type { Meta, StoryObj } from "@storybook/react";

import Fieldset from "@/ui/html/fieldset";

const meta = {
  title: "HTML/Fieldset",
  component: Fieldset,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FieldsetStory: Story = {
  args: {},
};
