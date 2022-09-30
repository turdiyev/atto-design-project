import { ComponentStory, ComponentMeta } from "@storybook/react";

import MenuItem from "./MenuItem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Elements/MenuItem",
  component: MenuItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof MenuItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const item = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
item.args = {
};

export const withIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withIcon.args = {
  children: []
};

export const withArrowIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withArrowIcon.args = {
  children: []
};

export const pinnable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
pinnable.args = {
  pinnable: true
};