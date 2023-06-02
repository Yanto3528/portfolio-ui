import type { Meta, StoryObj } from "@storybook/react";

import Autocomplete from "./Autocomplete";

const meta = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: Story["args"] = {
  colorScheme: "primary",
  disabled: false,
  error: "",
  label: "Select country",
  loading: false,
  name: "country",
  options: [
    { value: "id", label: "Indonesia" },
    { value: "sg", label: "Singapore" },
    { value: "usa", label: "United States of America" },
    { value: "jp", label: "Japan" },
    { value: "my", label: "Malaysia" },
    { value: "vt", label: "Vietnam" },
    { value: "th", label: "Thailand" },
    { value: "cn", label: "China" },
  ],
  placeholder: "Select country",
  radius: "sm",
  required: false,
  size: "md",
};

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

export const Loading: Story = {
  args: {
    ...defaultArgs,
    loading: true,
  },
};

export const Required: Story = {
  args: {
    ...defaultArgs,
    required: true,
  },
};
