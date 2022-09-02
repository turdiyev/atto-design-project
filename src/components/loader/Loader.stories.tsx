import { ComponentMeta, ComponentStory } from "@storybook/react";
import Loader from "./Loader";

export default {
  title: "Component/Loader",
  component: Loader,
  parametrs: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof Loader>

const Teamplate: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const pageLoader = Teamplate.bind({})