import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Toggle from "./Toggle";
import { useToggle } from "@/hooks/common";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;

type BaseStory = StoryObj<typeof meta>;
type Story = BaseStory;

function DefaultRender(args: Story["args"]) {
  const [isEnabled, { toggle }] = useToggle(false);

  return (
    <Toggle {...args} enabled={isEnabled} onChange={toggle}>
      <Toggle.Switch />
      <Toggle.Label />
    </Toggle>
  );
}

const defaultArgs: Story["args"] = {
  enabled: false,
  enabledLabel: "",
  label: "",
  colorScheme: "primary",
  children: null,
};

export const Primary: Story = {
  render: DefaultRender,
  args: {
    ...defaultArgs,
  },
};

export const Danger: Story = {
  render: DefaultRender,
  args: {
    ...defaultArgs,
    colorScheme: "danger",
  },
};

export const Success: Story = {
  render: DefaultRender,
  args: {
    ...defaultArgs,
    colorScheme: "success",
  },
};

export const WithLabel: Story = {
  render: DefaultRender,
  args: {
    ...defaultArgs,
    label: "Enable",
  },
};

export const WithEnabledLabel: Story = {
  render: DefaultRender,
  args: {
    ...defaultArgs,
    label: "Not enabled",
    enabledLabel: "Enabled",
  },
};
