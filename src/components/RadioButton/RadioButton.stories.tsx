import RadioButton from "./RadioButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: "Radio Option",
  },
};

export const Checked: Story = {
  args: {
    label: "Checked Option",
    checked: true,
  },
};
