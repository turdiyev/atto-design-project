import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TableColumn } from "./Table";

export const TableColumnStory = {
  title: "Component/TableColumn",
  component: TableColumn,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof TableColumn>;
const ColumnTemplate: ComponentStory<typeof TableColumn> = (args) => (
  <TableColumn {...args} />
);
export const SimpleColumn = ColumnTemplate.bind({});
SimpleColumn.args = {
  label: "Name",
  prop: "name",
  sortable: true,
  cellRenderer: (row) => 'hi',
};
