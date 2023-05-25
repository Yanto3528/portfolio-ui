import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs: Story["args"] = {
  type: "single",
  showBorder: true,
  collapsible: true,
  disabled: false,
  asChild: false,
  onValueChange: undefined,
  value: undefined,
  defaultValue: undefined,
};

function defaultRender(args: Story["args"]) {
  return (
    <Accordion {...args}>
      <Accordion.Item value="1">
        <Accordion.Trigger>How do accordion works?</Accordion.Trigger>
        <Accordion.Content>
          By clicking on each item, it will collapse or expand accordingly
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="2">
        <Accordion.Trigger>
          Can I open multiple item at the same time?
        </Accordion.Trigger>
        <Accordion.Content>
          Yes you can, just add type="multiple" and you're good to go
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="3">
        <Accordion.Trigger>What if I don't want the border?</Accordion.Trigger>
        <Accordion.Content>
          You can pass hideBorder=true to hide it
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}

export const Default: Story = {
  render: defaultRender,
  args: {
    ...defaultArgs,
  },
};

export const Multiple: Story = {
  render: defaultRender,
  args: {
    type: "multiple",
  },
};
