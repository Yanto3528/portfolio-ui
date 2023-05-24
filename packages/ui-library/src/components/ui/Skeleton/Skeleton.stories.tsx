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
  radius: "md",
  count: 1,
  width: 200,
  height: 20,
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Count: Story = {
  args: {
    ...defaultArgs,
    count: 4,
  },
};

export const RadiusSmall: Story = {
  args: {
    ...defaultArgs,
    radius: "sm",
  },
};

export const RadiusMedium: Story = {
  args: {
    ...defaultArgs,
    radius: "md",
  },
};

export const RadiusLarge: Story = {
  args: {
    ...defaultArgs,
    radius: "lg",
  },
};

export const RadiusFull: Story = {
  args: {
    ...defaultArgs,
    radius: "full",
  },
};

export const Circle: Story = {
  args: {
    ...defaultArgs,
    radius: "full",
    width: 40,
    height: 40,
  },
};

export const Example: Story = {
  render: () => {
    return (
      <div className="flex items-start gap-4 border border-gray-200 rounded-md p-4 w-80">
        <Skeleton className="w-10 h-10" radius="full" />
        <div className="flex flex-col gap-2 w-full flex-1">
          <Skeleton />
          <Skeleton width={200} />
          <Skeleton width={100} />
        </div>
      </div>
    );
  },
};
