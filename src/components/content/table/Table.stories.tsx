import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table, { TableColumn } from "./Table";
import * as TableColumnStories from "./TableColumn.stories";

export default {
  title: "Component/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const SimpleTable = Template.bind({});
SimpleTable.args = {
  data: [
    { name: "HI", count: 21, amount: 200000, percantage: 23 },
    { name: "HI", count: 60, amount: 230000, percantage: 67 },
    { name: "HI", count: 66, amount: 324, percantage: 87 },
    { name: "HI", count: 10, amount: 324, percantage: 56 },
  ],
  children: [
    <TableColumn
      label="Name"
      prop="name"
      cellRenderer={(row: any) => <strong>{row.name}</strong>}
    />,
    <TableColumn
      label="COunt"
      prop="count"
      //   cellRenderer={(row) => <div>row</div>}
    />,
    <TableColumn
      label="$"
      prop="amount"
      //   cellRenderer={(row) => <div>row</div>}
    />,
    <TableColumn
      label="%"
      prop="percentage"
      cellRenderer={(row: any) => <div>{row.percantage}%</div>}
    />,
  ],
};
