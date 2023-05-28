import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

function WithStateRender(args: Story["args"]) {
  const [checked, setChecked] = useState(false);
  const onChange = (checkValue: boolean) => setChecked(checkValue);

  return <Checkbox {...args} checked={checked} onChange={onChange} />;
}

const defaultArgs: Story["args"] = {
  label: "Click me",
  checkedLabel: "",
  labelClassName: "",
  wrapperClassName: "",
  id: "checkbox",
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const CheckedLabel: Story = {
  render: WithStateRender,
  args: {
    ...defaultArgs,
    checkedLabel: "I am checked",
  },
};

export const WithoutLabel: Story = {
  render: WithStateRender,
  args: {
    ...defaultArgs,
    label: "",
  },
};
