import type { Meta, StoryObj } from "@storybook/react-vite";

import { TextInput } from ".";
import { EyeIcon } from "../../assets/icons/Eye";

const meta = { title: "Components/Input", component: TextInput } satisfies Meta<
  typeof TextInput
>;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    placeholder: "Text here...",
  },
};

export const WithError: Story = {
  args: {
    label: "Label",
    hasError: true,
    errorMessage: "This is an error message",
  },
};

export const Disabled: Story = {
  args: {
    label: "Label",
    disabled: true,
    value: "Disabled input",
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: "Text here...",
    endIcon: <EyeIcon color="#acaba7" />,
    type: "password",
  },
};

export default meta;
