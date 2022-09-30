import {
  Button,
  Card,
  Descriptions,
  PageHeader,
  Select,
  Statistic,
  Table,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import MainLayout from "layout/MainLayout";
import React from "react";
import { ReactComponent as BackIcon } from "assets/back-icon.svg";

const { Option } = Select;
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  bus: TypeTotal;
  metro: TypeTotal;
  route: TypeTotal;
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
      className: "!border-b-0",
      render: (text: string) => (
        <div className="text-lg font-semibold">{text}</div>
      ),
    },
    {
      title: "Автобус",
      dataIndex: "bus",
      key: "bus",
      className: "border-none !border-0",
      width: 300,
      render: (stats: TypeTotal) => <StatsCard stats={stats} />,
    },
    {
      title: "Метро",
      dataIndex: "metro",
      key: "metro",

      className: "border-none !border-0",
      width: 300,
      render: (stats: TypeTotal) => <StatsCard stats={stats} />,
    },
    {
      title: "Метро",
      dataIndex: "route",
      key: "route",

      className: "border-none !border-0",
      width: 300,
      render: (stats: TypeTotal) => <StatsCard stats={stats} />,
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "Транспортная карта",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      bus: { paidCount: 922, paidSum: 1290800 },
      metro: { paidCount: 118467, paidSum: 165853800 },
      route: { paidCount: 118467, paidSum: 165853800 },
    },
    {
      key: "1",
      name: "QR карта",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      bus: { paidCount: 922, paidSum: 1290800 },
      metro: { paidCount: 118467, paidSum: 165853800 },
      route: { paidCount: 118467, paidSum: 165853800 },
    },
    {
      key: "1",
      name: "Транспортная карта",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      bus: { paidCount: 922, paidSum: 1290800 },
      metro: { paidCount: 118467, paidSum: 165853800 },
      route: { paidCount: 118467, paidSum: 165853800 },
    },
    {
      key: "1",
      name: "Транспортная карта",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      bus: { paidCount: 922, paidSum: 1290800 },
      metro: { paidCount: 118467, paidSum: 165853800 },
      route: { paidCount: 118467, paidSum: 165853800 },
    },
    {
      key: "1",
      name: "Транспортная карта",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      bus: { paidCount: 922, paidSum: 1290800 },
      metro: { paidCount: 118467, paidSum: 165853800 },
      route: { paidCount: 118467, paidSum: 165853800 },
    },
    {
      key: "1",
      name: "Транспортная карта",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
      bus: { paidCount: 922, paidSum: 1290800 },
      metro: { paidCount: 118467, paidSum: 165853800 },
      route: { paidCount: 118467, paidSum: 165853800 },
    },
  ];
  return (
    <MainLayout
      header={
        <PageHeader
          // className="site-page-header-responsive"
          onBack={() => window.history.back()}
          backIcon={<BackIcon />}
          title="Title"
          extra={[
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option!.children as unknown as string).includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA!.children as unknown as string)
                  .toLowerCase()
                  .localeCompare(
                    (optionB!.children as unknown as string).toLowerCase()
                  )
              }
            >
              <Option value="1">Весь Узбекистан</Option>
              <Option value="2">Tashkent</Option>
              <Option value="3">Samarqand</Option>
              <Option value="4">Buxoro</Option>
              <Option value="5">Fargona</Option>
              <Option value="6">Surxondaryo</Option>
            </Select>,
          ]}
        />
      }
    >
      <div>
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

function StatsCard({ stats }: { stats: TypeTotal }) {
  return (
    <Card
      bodyStyle={{ display: "flex", padding: "11px 16px" }}
      style={{
        borderRadius: "12px",
      }}
      className="border !border-[#e6e6e6] hover:!shadow-[0_4px_8px_rgba(82,82,204,0.3)] hover:!border-[rgba(82,82,204,0.6)] hover:!border transition-all duration-700"
      hoverable={true}
    >
      <Statistic
        title="Проезды"
        value={stats.paidCount}
        className="basis-1/2 -mt-2"
        valueStyle={{
          fontWeight: "bold",
          marginTop: -4,
        }}
      />
      <Statistic
        title="Сумма"
        value={stats.paidSum}
        className="basis-1/2"
        valueStyle={{
          fontWeight: "bold",
          marginTop: -4,
        }}
      />
    </Card>
  );
}
