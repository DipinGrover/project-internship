import type { Meta, StoryObj } from "@storybook/react";
import HelloButton from "./HelloButton";

const meta: Meta<typeof HelloButton> = {
  title: "Example/HelloButton",
  component: HelloButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof HelloButton>;

export const Primary: Story = {
  args: {
    label: "Hello Tailwind 🚀",
  },
};
