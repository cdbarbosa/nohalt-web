import type { Meta, StoryObj } from "@storybook/react-vite";

import { ButtonComponent } from ".";
import { VariantOptions } from "./constants";

const meta: Meta<typeof ButtonComponent> = {
  title: "Components/Button",
  component: ButtonComponent,
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Default: Story = {
  argTypes: {
    variant: {
      options: VariantOptions,
      control: { type: "radio" },
    },
  },
  args: {
    children: "Button",
    onClick: () => console.log("Button clicked!"),
  },
};

export const Disabled: Story = {
  argTypes: {
    variant: {
      options: ["primary", "outlined", "info"],
      control: { type: "radio" },
    },
  },
  args: {
    children: "Button",
    disabled: true,
  },
};
