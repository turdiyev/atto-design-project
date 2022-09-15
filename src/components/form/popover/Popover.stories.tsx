import { ComponentStory, ComponentMeta } from "@storybook/react";
import Popover from "./Popover";

export default {
  title: "Elements/Popover",
  component: Popover,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Hover = Template.bind({});
Hover.args = {
  variant: 'Hover'
};

export const Click = Template.bind({});
Click.args = {
  variant: 'Click'
};

export const Focus = Template.bind({});
Focus.args = {
  variant: 'Focus'
};


