import { ComponentStory, ComponentMeta } from "@storybook/react";

import Popover from "./Popover";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Elements/Popover",
  component: Popover,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Popover>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const hover = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
hover.args = {
  variant: 'hover'
};

export const click = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
click.args = {
  variant: 'click'
};

export const focus = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
focus.args = {
  variant: 'focus'
};


