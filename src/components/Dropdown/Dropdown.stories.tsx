import Dropdown from "./Dropdown";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
];

export const Default: Story = {
  args: {
    options,
  },
};

export const WithDefaultValue: Story = {
  args: {
    options,
    defaultValue: "2",
  },
};
