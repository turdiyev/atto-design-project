import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import Table, { TableColumn } from "./Table";
import { expect } from "@storybook/jest";
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
    <TableColumn
      label="Name"
      prop="name"
      cellRenderer={(row: any) => <strong>{row.name}</strong>}
    />,
    <TableColumn label="Count" prop="count" align="center" />,
    <TableColumn label="$" prop="amount" align="right" />,
    <TableColumn
      label="%"
      prop="percantage"
      align="center"
      cellRenderer={(row: any) => <div>{row.percantage}%</div>}
    />,
  ],
};

export const SortableTable = Template.bind({});
SortableTable.args = {
  data: [
    { fullName: "John Smith", count: 21, amount: 2000, percantage: 23 },
    { fullName: "George Adam", count: 60, amount: 230000, percantage: 67 },
    { fullName: "Tom Jhonson", count: 66, amount: 32000, percantage: 87 },
    {
      fullName: "Alexander Thunderlend",
      count: 10,
      amount: 80000,
      percantage: 56,
    },
    { fullName: "Kim Ann", count: 10, amount: 1500, percantage: 56 },
  ],
  children: [
    <TableColumn
      label="Full Name"
      prop="fullName"
      cellRenderer={(row: any) => <strong>{row.fullName}</strong>}
    />,
    <TableColumn label="Count" prop="count" align="center" />,
    <TableColumn label="$" prop="amount" align="right" sortable />,
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
SortableTable.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const [sortBtn, sortBtn2] = canvas.getAllByLabelText("Sort Icon Button");
  //first btn first click
  await userEvent.click(sortBtn);
  expect(sortBtn).toHaveClass("sorted-asc");
  console.log("first btn first click -", args);
  //first btn second click
  await userEvent.click(sortBtn);
  expect(sortBtn).toHaveClass("sorted-desc");
  console.log("first btn second click -", args);

  //second btn first click
  await userEvent.click(sortBtn2);
  expect(sortBtn2).toHaveClass("sorted-asc ");
  //second btn second click
  await userEvent.click(sortBtn2);
  expect(sortBtn2).toHaveClass("sorted-desc");
  // //second btn third click
  // await userEvent.click(sortBtn2);
  // expect(sortBtn2).toHaveClass("no-sorted");
};

export const SelectionTable = Template.bind({});
SelectionTable.args = {
  data: [
    { fullName: "John Smith", count: 21, amount: 2000, percantage: 23 },
    { fullName: "George Adam", count: 60, amount: 230000, percantage: 67 },
    { fullName: "Tom Jhonson", count: 66, amount: 32000, percantage: 87 },
    {
      fullName: "Alexander Thunderlend",
      count: 10,
      amount: 80000,
      percantage: 56,
    },
    { fullName: "Kim Ann", count: 10, amount: 1500, percantage: 56 },
  ],
  children: [
    <TableColumn type="selection" width={55} />,
    <TableColumn
      label="Full Name"
      prop="fullName"
      cellRenderer={(row: any) => <strong>{row.fullName}</strong>}
    />,
    <TableColumn label="Count" prop="count" align="center" />,
    <TableColumn label="$" prop="amount" align="right" sortable />,
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
SelectionTable.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
};

export const ExpandableTable = Template.bind({});
ExpandableTable.args = {
  data: [
    {
      fullName: "You Thong",

      count: 21,
      amount: 2000,
      percantage: 23,
      children: [
        { fullName: "One Smith", count: 21, amount: 2000, percantage: 23 },
        {
          fullName: "George Adam",
          count: 60,
          amount: 230000,
          percantage: 67,
        },
        { fullName: "Tom Jhonson", count: 66, amount: 32000, percantage: 87 },
        {
          fullName: "Alexander Thunderlend",
          count: 10,
          amount: 80000,
          percantage: 56,
        },
        { fullName: "Kim Ann", count: 10, amount: 1500, percantage: 56 },
      ],
    },
    { fullName: "George Adam", count: 60, amount: 230000, percantage: 67 },
    { fullName: "Tom Jhonson", count: 66, amount: 32000, percantage: 87 },
    {
      fullName: "Alexander Thunderlend",
      count: 10,
      amount: 80000,
      percantage: 56,
      children: [
        { fullName: "John Smith", count: 21, amount: 2000, percantage: 23 },
        { fullName: "George Adam", count: 60, amount: 230000, percantage: 67 },
        { fullName: "Tom Jhonson", count: 66, amount: 32000, percantage: 87 },
        {
          fullName: "Alexander Thunderlend",
          count: 10,
          amount: 80000,
          percantage: 56,
        },
        { fullName: "Kim Ann", count: 10, amount: 1500, percantage: 56 },
      ],
    },
    { fullName: "Kim Ann", count: 10, amount: 1500, percantage: 56 },
  ],
  children: [
    // <TableColumn type="selection" width={55} />,
    <TableColumn
      label="Full Name"
      prop="fullName"
      cellRenderer={(row: any) => <strong>{row.fullName}</strong>}
    />,
    <TableColumn label="Count" prop="count" align="center" />,
    <TableColumn label="$" prop="amount" align="right" sortable />,
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

ExpandableTable.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const [,,sortIconBtn, sortIconBtn2] = canvas.getAllByRole("button");
  await userEvent.click(sortIconBtn);
  await userEvent.click(sortIconBtn2);
};
