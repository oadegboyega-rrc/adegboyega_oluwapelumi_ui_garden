import React from "react";
import HeroImage from "./HeroImage";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/800x300",
    alt: "Default Hero",
  },
};

export const CustomSize: Story = {
  args: {
    src: "https://via.placeholder.com/400x200",
    alt: "Custom Size Hero",
    width: 400,
    height: 200,
  },
};
