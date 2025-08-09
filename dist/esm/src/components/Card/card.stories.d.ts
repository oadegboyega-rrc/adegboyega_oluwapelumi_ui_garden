import Card from "./Card";
import type { Meta, StoryObj } from "@storybook/react";
declare const meta: Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof Card>;
export declare const Default: Story;
export declare const WithCustomContent: Story;
