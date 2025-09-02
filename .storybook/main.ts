import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    // O Tailwind v4 é automaticamente reconhecido pelo Vite
    const { default: tailwindcss } = await import("@tailwindcss/vite");
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, { plugins: [tailwindcss()] });
  },
};
export default config;
