import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { HomeIcon, User2Icon, SettingsIcon } from "lucide-react";

import Tabs from "./Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

function DefaultRender(args: Story["args"]) {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <Tabs {...args} value={selectedTab} onValueChange={setSelectedTab}>
      <Tabs.List>
        <Tabs.Trigger value="home">Home</Tabs.Trigger>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="home">Home content</Tabs.Content>
      <Tabs.Content value="account">Account content</Tabs.Content>
      <Tabs.Content value="settings">Settings content</Tabs.Content>
    </Tabs>
  );
}

function WithIconRender(args: Story["args"]) {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <Tabs {...args} value={selectedTab} onValueChange={setSelectedTab}>
      <Tabs.List>
        <Tabs.Trigger icon={<HomeIcon size={16} />} value="home">
          Home
        </Tabs.Trigger>
        <Tabs.Trigger icon={<User2Icon size={16} />} value="account">
          Account
        </Tabs.Trigger>
        <Tabs.Trigger icon={<SettingsIcon size={16} />} value="settings">
          Settings
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="home">Home content</Tabs.Content>
      <Tabs.Content value="account">Account content</Tabs.Content>
      <Tabs.Content value="settings">Settings content</Tabs.Content>
    </Tabs>
  );
}

const defaultArgs: Story["args"] = {};

export const Primary: Story = {
  render: DefaultRender,
  args: {
    ...defaultArgs,
  },
};

export const WithIcon: Story = {
  render: WithIconRender,
  args: {
    ...defaultArgs,
  },
};
