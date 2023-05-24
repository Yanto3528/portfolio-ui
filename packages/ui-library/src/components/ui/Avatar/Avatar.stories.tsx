import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: Story["args"] = {
  src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  alt: "profile",
  defaultImage: "",
  size: "md",
  fallback: "",
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const WithFallback: Story = {
  args: {
    ...defaultArgs,
    fallback: "Yanto Lee",
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

export const ExtraLarge: Story = {
  args: {
    ...defaultArgs,
    size: "xl",
  },
};
