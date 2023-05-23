import type { Meta, StoryObj } from "@storybook/react";

import Badge from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: Story["args"] = {
  children: "Technology",
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Secondary: Story = {
  args: {
    ...defaultArgs,
    colorScheme: "secondary",
  },
};

export const Danger: Story = {
  args: {
    ...defaultArgs,
    colorScheme: "danger",
  },
};

export const Outline: Story = {
  args: {
    ...defaultArgs,
    variant: "outline",
  },
};
