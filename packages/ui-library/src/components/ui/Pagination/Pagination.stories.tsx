import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Pagination from "./Pagination";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

function ExampleRender() {
  const [page, setPage] = useState(1);
  const onChange = (pageValue: number | string) => setPage(Number(pageValue));

  return (
    <Pagination
      currentPage={page}
      totalCount={100}
      pageSize={10}
      onPageChange={onChange}
    />
  );
}

const defaultArgs: Story["args"] = {
  currentPage: 1,
  pageSize: 10,
  totalCount: 100,
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Example: Story = {
  render: ExampleRender,
  args: {
    ...defaultArgs,
  },
};
