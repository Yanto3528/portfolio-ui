import type { Meta, StoryObj } from "@storybook/react";

import Spinner from "./Spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: Story["args"] = {
  colorScheme: "primary",
  size: "md",
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
  },
};

export const White: Story = {
  args: {
    ...defaultArgs,
    colorScheme: "white",
  },
};

export const Inherit: Story = {
  args: {
    ...defaultArgs,
    colorScheme: "inherit",
  },
};

export const Small: Story = {
  args: {
    ...defaultArgs,
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    ...defaultArgs,
    size: "md",
  },
};

export const Large: Story = {
  args: {
    ...defaultArgs,
    size: "lg",
  },
};
