import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Elements/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const input = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
input.args = {
};

export const inputNumber = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
inputNumber.args = {
  type: "number"
};

