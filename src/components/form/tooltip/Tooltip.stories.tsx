import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from "./Tooltip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Elements/Tooltip",
  component: Tooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Tooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const top = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
top.args = {
  position: 'top'
};

export const right = Template.bind({});
right.args = {
  position: 'right'
};

export const bottom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
bottom.args = {
  position: 'bottom'
};

export const left = Template.bind({});
left.args = {
  position: 'left'
};


