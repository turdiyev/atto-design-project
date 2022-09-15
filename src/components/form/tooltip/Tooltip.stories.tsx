import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "./Tooltip";

export default {
  title: "Elements/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const top = Template.bind({});
top.args = {
  position: 'Top'
};

export const right = Template.bind({});
right.args = {
  position: 'Right'
};

export const bottom = Template.bind({});
bottom.args = {
  position: 'Bottom'
};

export const left = Template.bind({});
left.args = {
  position: 'Left'
};


