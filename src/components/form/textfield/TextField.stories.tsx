import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextField from "./TextField";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Elements/TextField",
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
filled.args = {
  mode: 'filled'
};

export const outlined = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
outlined.args = {
  mode: 'outlined'
};

export const standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
standard.args = {
  mode: 'standard'
};

export const defaultFilled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
defaultFilled.args = {
  type: 'default'
};

export const valid = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
valid.args = {
  type: 'valid'
};

export const error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
error.args = {
  type: 'error'
};