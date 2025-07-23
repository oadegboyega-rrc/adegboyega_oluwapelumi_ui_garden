import React from "react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: "Button",
  },
};

export const Disabled: Story = {
  args: {
    text: "Button",
    disabled: true,
  },
};
