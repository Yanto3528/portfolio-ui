import type { Meta, StoryObj } from "@storybook/react";
import { AlertCircleIcon } from "lucide-react";

import { useToggle } from "@/hooks/common";
import Button from "../Button";

import Modal from "./Modal";

const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

function DefaultRender() {
  const [isOpen, { open, close }] = useToggle(false);

  return (
    <>
      <Button onClick={open}>Click me to open</Button>
      <Modal isOpen={isOpen} onClose={close}>
        <Modal.Title icon={<AlertCircleIcon />} className="text-danger">
          Delete item
        </Modal.Title>
        <Modal.Body>
          <p>Are you sure you want to delete this item?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button colorScheme="secondary" variant="outline" onClick={close}>
            Cancel
          </Button>
          <Button colorScheme="danger">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const defaultArgs: Story["args"] = {
  isOpen: false,
  children: null,
};

export const Primary: Story = {
  render: DefaultRender,
  args: {
    ...defaultArgs,
  },
};
