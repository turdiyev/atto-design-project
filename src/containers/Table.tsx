import {
  Button,
  Card,
  Descriptions,
  Input,
  PageHeader,
  Select,
  Statistic,
  Table,
  DatePicker,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import MainLayout from "layout/MainLayout";
import React from "react";
import {ReactComponent as BackIcon} from "assets/back-icon.svg"
const { Option } = Select;
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  bus: number;
  metro: number;
  route: number;
  icon?: React.ReactNode;
}
type TypeTotal = {
  paidCount: number;
  paidSum: number;
};
type Props = {};
export default function Main(props: unknown) {
  const columns: ColumnsType<DataType> = [
    {
      title: "Вид оплаты",
      dataIndex: "name",
    },
    {
      title: "Автобус",
      dataIndex: "bus",
      key: "bus",
      width: 300,
    },
    {
      title: "Метро",
      dataIndex: "metro",
      key: "metro",

      width: 300,
    },
    {
      title: "Метро",
      dataIndex: "route",
      key: "route",

      width: 300,
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "Транспортная карта",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      bus: 1290800,
      metro: 118467,
      route: 3242423,
    },
    {
      key: "1",
      name: "QR карта",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      bus: 1290800,
      metro: 118467,
      route: 3242423,
    },
    {
      key: "1",
      name: "Транспортная карта",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      bus: 1290800,
      metro: 118467,
      route: 3242423,
    },
    {
      key: "1",
      name: "Транспортная карта",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      bus: 1290800,
      metro: 118467,
      route: 3242423,
    },
    {
      key: "1",
      name: "Транспортная карта",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      bus: 1290800,
      metro: 118467,
      route: 3242423,
    },
    {
      key: "1",
      name: "Транспортная карта",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      bus: 1290800,
      metro: 118467,
      route: 3242423,
    },
  ];
  return (
    <MainLayout
      header={
        <PageHeader
          // className="site-page-header-responsive"
          onBack={() => window.history.back()}
          backIcon={<BackIcon/>}
          title="Автобусы"
          extra={[
            <Button icon={<i className="mr-1 not-italic">⨯</i>}>
              Скрыть фильтр
            </Button>,
          ]}
        />
      }
    >
      <div>
        <form action="/" className="flex flex-col space-y-3 mb-5">
          <div className="flex flex-row gap-4 justify-between">
            <Select className="basis-1/6" placeholder="Placeholder">
              <Option value="1">Option 2</Option>
              <Option value="2">Option 2</Option>
              <Option value="3">Option 3</Option>
            </Select>
            <DatePicker.RangePicker />
            <span className="basis-1/6">
              <Input prefix={<>+</>} placeholder="Place holder" />
            </span>
            <Select className="basis-1/6" placeholder="Placeholder">
              <Option value="1">Option 2</Option>
              <Option value="2">Option 2</Option>
              <Option value="3">Option 3</Option>
            </Select>
            <span className="basis-1/6">
              <Input placeholder="Place holder" />
            </span>
            <Select className="basis-1/6" placeholder="Placeholder">
              <Option value="1">Option 2</Option>
              <Option value="2">Option 2</Option>
              <Option value="3">Option 3</Option>
            </Select>
            <span className="basis-1/6">
              <Input placeholder="Place holder" />
            </span>
          </div>
          <footer className="w-full flex border-solid  border-0 border-t border-[#E6E6E6] space-x-4 pt-3">
            <Button type="primary" htmlType="submit">
              Применить
            </Button>
            <Button>Очистить фильтр</Button>
          </footer>
        </form>
        <Table
          pagination={false}
          size="middle"
          columns={columns}
          dataSource={data}
          className="drop-shadow-sm"
        />
      </div>
    </MainLayout>
  );
}
