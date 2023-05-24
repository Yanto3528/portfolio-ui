import type { Meta, StoryObj } from "@storybook/react";

import Dropdown from "./DropdownMenu";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: Story["args"] = {
  children: "Technology",
};

export const Default: Story = {
  render: () => {
    return (
      <Dropdown>
        <Dropdown.Trigger>
          <Avatar fallback="Yanto Lee" />
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item>Account</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    );
  },
  args: {
    ...defaultArgs,
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <Dropdown>
        <Dropdown.Trigger>
          <Avatar fallback="Yanto Lee" />
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Label>People</Dropdown.Label>
          <Dropdown.Item>Account</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    );
  },
  args: {
    ...defaultArgs,
  },
};
