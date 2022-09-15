import { ComponentStory, ComponentMeta } from "@storybook/react";
import Popover from "./Popover";

export default {
  title: "Elements/Popover",
  component: Popover,
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


export const Top = Template.bind({});
Top.args = {
  position: 'Top'
};

export const Bottom = Template.bind({});
Bottom.args = {
  position: 'Bottom'
};

export const Right = Template.bind({});
Right.args = {
  position: 'Right'
};


export const Left = Template.bind({});
Left.args = {
  position: 'Left'
};