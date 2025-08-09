import React from "react";
import Card from "./Card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "This is a card",
  },
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <div>
        <h3>Card Title</h3>
        <p>Card content goes here.</p>
      </div>
    ),
  },
};
