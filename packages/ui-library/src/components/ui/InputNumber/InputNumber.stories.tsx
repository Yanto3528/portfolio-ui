import type { Meta, StoryObj } from "@storybook/react";
import { User2 } from "lucide-react";

import InputNumber from "./InputNumber";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/InputNumber",
  component: InputNumber,
  tags: ["autodocs"],
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: Story["args"] = {
  colorScheme: "primary",
  size: "md",
  label: "Quantity",
  labelClassName: "",
  error: "",
  disabled: false,
  rightElement: null,
  placeholder: "Enter quantity",
  radius: "md",
  id: "name",
  min: 0,
  max: 100000,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Error: Story = {
  args: {
    ...defaultArgs,
    error: "This field is required",
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

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
};

export const WithLeftElement: Story = {
  args: {
    ...defaultArgs,
    leftElement: <User2 size={20} />,
  },
};

export const WithRightElement: Story = {
  args: {
    ...defaultArgs,
    rightElement: <User2 size={20} />,
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
