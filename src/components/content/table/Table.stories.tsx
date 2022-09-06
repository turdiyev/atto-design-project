import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table, { TableColumn } from "./Table";

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
    { name: "HI", count: 21, amount: 2000, percantage: 23 },
    { name: "HI", count: 60, amount: 230000, percantage: 67 },
    { name: "HI", count: 66, amount: 32000, percantage: 87 },
    { name: "HI", count: 10, amount: 80000, percantage: 56 },
    { name: "HI", count: 10, amount: 1500, percantage: 56 },
  ],
  children: [
    <TableColumn type="selection" width={55} />,
    <TableColumn
      label="Name"
      prop="name"
      cellRenderer={(row: any) => <strong>{row.name}</strong>}
    />,
    <TableColumn
      label="COunt"
      prop="count"
      align="center"
    />,
    <TableColumn
      label="$"
      prop="amount"
      align="right"
      sortable
    />,
    <TableColumn
      label="%"
      prop="percantage"
      sortable
      align="center"
      cellRenderer={(row: any) => <div>{row.percantage}%</div>}
    />,
    <TableColumn
      // prop="percentage"
      label="Action"
      width={80}
      align="right"
      cellRenderer={(row: any) => (
        <a
          href="/"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      )}
    />,
  ],
};
