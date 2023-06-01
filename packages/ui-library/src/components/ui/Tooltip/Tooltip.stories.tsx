import type { Meta, StoryObj } from "@storybook/react";

import Tooltip from "./Tooltip";
import { TooltipContentProps } from "./Tooltip.types";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;

type BaseStory = StoryObj<typeof meta>;
type StoryArgs = BaseStory["args"] & {
  contentProps?: TooltipContentProps;
};
type Story = BaseStory & {
  args: StoryArgs;
};

function DefaultRender({ contentProps, ...args }: StoryArgs) {
  return (
    <div className="w-full h-60 flex items-center justify-center">
      <Tooltip {...args}>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content {...contentProps}>
          This is a tooltip content which is a bit long and super duper tiring
          to write
        </Tooltip.Content>
      </Tooltip>
    </div>
  );
}

const defaultArgs: StoryArgs = {
  defaultOpen: false,
  delayDuration: 0,
  contentProps: {
    side: "top",
  },
};

export const Default: Story = {
  render: DefaultRender,
  args: {
    ...defaultArgs,
  },
};

export const Left: Story = {
  render: DefaultRender,
  args: {
    ...defaultArgs,
    contentProps: {
      side: "left",
    },
  },
};

export const Right: Story = {
  render: DefaultRender,
  args: {
    ...defaultArgs,
    contentProps: {
      side: "right",
    },
  },
};

export const Bottom: Story = {
  render: DefaultRender,
  args: {
    ...defaultArgs,
    contentProps: {
      side: "bottom",
    },
  },
};
