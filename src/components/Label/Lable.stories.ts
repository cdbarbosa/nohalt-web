import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from ".";

const meta = { component: Label } satisfies Meta<typeof Label>;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: "Label",
  },
};

export default meta;
