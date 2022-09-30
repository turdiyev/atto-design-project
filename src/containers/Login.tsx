import {
  Button,
  Card,
  Descriptions,
  Input,
  PageHeader,
  Select,
  Statistic,
  Table,
  Typography,
} from "antd";
import AuthLayout from "layout/AuthLayout";
import React from "react";
const { Option } = Select;

type Props = {};
export default function LoginContainer(props: unknown) {
  return (
    <AuthLayout>
      <div className="flex flex-col min-h-full space-y-3 lg:px-32 justify-center  items-center">
        <form action="#" className="flex flex-col space-y-5 w-72  sm text-center">
          <Typography.Title level={3} className="!text-white !font-bold">Войти</Typography.Title>
          <Input
            placeholder="Имя пользователя"
            size="large"
            className="!bg-[rgba(31,42,102,1)] !font-semibold !text-white/90 !border-[rgba(31,42,102,1)] !px-5 !py-3"
          />
          <Input
            placeholder="Пароль"
            type="password"
            size="large"
            className="!bg-[rgba(31,42,102,1)] !font-semibold  !text-white/90 !border-[rgba(31,42,102,1)] !px-5 !py-3"
          />
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className=" !font-semibold !text-white/90  !h-[52px]"
          >
            Войти
          </Button>
        </form>
        <Typography.Paragraph className="!text-white/60 text-center !mt-28">
          Если у вас возникли проблемы с входом, свяжитесь со службой
          технической поддержки
        </Typography.Paragraph>
      </div>
    </AuthLayout>
  );
}
