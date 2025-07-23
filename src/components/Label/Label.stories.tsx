import Label from "./Label";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "Label",
  },
};

export const Disabled: Story = {
  args: {
    text: "Label",
    disabled: true,
  },
};
