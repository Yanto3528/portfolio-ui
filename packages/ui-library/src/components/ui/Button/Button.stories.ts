import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: Story["args"] = {
  children: "Submit",
  colorScheme: "primary",
  variant: null,
  size: "md",
  radius: "md",
  loading: false,
  disabled: false,
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

export const OutlineSecondary: Story = {
  args: {
    ...defaultArgs,
    colorScheme: "secondary",
    variant: "outline",
  },
};

export const OutlineDanger: Story = {
  args: {
    ...defaultArgs,
    colorScheme: "danger",
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    ...defaultArgs,
    loading: true,
  },
};

export const OutlineLoading: Story = {
  args: {
    ...defaultArgs,
    variant: "outline",
    loading: true,
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
