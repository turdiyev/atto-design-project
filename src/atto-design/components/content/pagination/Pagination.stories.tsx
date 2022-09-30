import { ComponentMeta, ComponentStory } from "@storybook/react";
import Pagination from "./Pagination";

export default {
  title: "Component/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Pagination>;

const Teamplate: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const SimplePagination = Teamplate.bind({});
SimplePagination.args = {
  total: 40,
  pageSize: 12,
  currentPage: 2,
};
export const SmallPagination = Teamplate.bind({});
SmallPagination.args = {
  total: 2,
  pageSize: 12,
  hasInfo: false
};