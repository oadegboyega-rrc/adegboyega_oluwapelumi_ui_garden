import React from "react";
import Img from "./Img";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Default Img",
  },
};

export const WithCustomAlt: Story = {
  args: {
    src: "https://via.placeholder.com/200",
    alt: "Custom Alt Text",
  },
};
