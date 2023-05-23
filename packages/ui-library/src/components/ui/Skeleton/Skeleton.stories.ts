import type { Meta, StoryObj } from "@storybook/react";

import Skeleton from "./Skeleton";

const meta = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: Story["args"] = {
  rounded: false,
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
  },
};
