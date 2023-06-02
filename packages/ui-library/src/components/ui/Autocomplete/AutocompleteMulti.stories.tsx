import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import AutocompleteMulti from "./AutocompleteMulti";
import { Option } from "./Autocomplete.types";

const meta = {
  title: "Components/AutocompleteMulti",
  component: AutocompleteMulti,
  tags: ["autodocs"],
} satisfies Meta<typeof AutocompleteMulti>;

export default meta;
type Story = StoryObj<typeof meta>;
type StoryArgs = Story["args"];
type DefaultRenderArgs = Omit<StoryArgs, "value" | "onChange">;

function DefaultRender(args: DefaultRenderArgs) {
  const [value, setValue] = useState<Option<string>[]>([]);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <AutocompleteMulti {...args} value={value} onChange={setValue} />;
}

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
  value: [{ value: "id", label: "Indonesia" }],
};

export const Primary: Story = {
  render: DefaultRender,
  args: {
    ...defaultArgs,
  },
};

export const Error: Story = {
  render: DefaultRender,
  args: {
    ...defaultArgs,
    error: "This field is required",
  },
};

export const Loading: Story = {
  render: DefaultRender,
  args: {
    ...defaultArgs,
    loading: true,
  },
};

export const Required: Story = {
  render: DefaultRender,
  args: {
    ...defaultArgs,
    required: true,
  },
};
