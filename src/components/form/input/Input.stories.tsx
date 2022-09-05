import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./Input";
import MaskedInput from "./Masked";

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
const MaskedTemplate: ComponentStory<typeof MaskedInput> = (args) => <MaskedInput {...args} />;

export const input = Template.bind({});
input.args = {};

export const inputNumber = Template.bind({});
inputNumber.args = {
  type: "number",
};

export const MaskedPhone = MaskedTemplate.bind({});
MaskedPhone.args = {
  type: "text",
  maskProps: {
    mask: '+\\9\\98 99 999 99 99',
    maskPlaceholder: null,
  },
  name: "pan",
  placeholder: "Phone Number"
};
