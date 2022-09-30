import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Elements/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  children: "Primary Button",
};
export const LargeWithLoader = Template.bind({});
LargeWithLoader.args = {
  size: "large",
  loader: true,
  children: "Large Loader Button",
};

export const DisabledSmall = Template.bind({});
DisabledSmall.args = {
  size: "small",
  disabled: true,
  children: "Small Button",
};
LargeWithLoader.args = {
  size: "large",
  loader: true,
  children: "Large Loader Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary Button",
};
export const Text = Template.bind({});
Text.args = {
  variant: "text",
  children: "Text Button",
};

