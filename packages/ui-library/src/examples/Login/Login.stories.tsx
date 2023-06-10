import type { Meta, StoryObj } from "@storybook/react";

import Login from "./Login";

const meta = {
  title: "Examples/Login",
  component: Login,
} satisfies Meta<typeof Login>;

export default meta;

type BaseStory = StoryObj<typeof meta>;
type Story = BaseStory;

const defaultArgs: Story["args"] = {};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
