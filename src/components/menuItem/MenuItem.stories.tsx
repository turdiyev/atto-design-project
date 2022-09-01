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
  mode: "item"
};

export const withLefticon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withLefticon.args = {
  mode: "withLeftIcon"
};

export const withArrowIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withArrowIcon.args = {
  mode: "withArrowIcon"
};

export const withBothIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
withBothIcon.args = {
  mode: "withBothIcon"
};