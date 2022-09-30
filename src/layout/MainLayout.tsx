import { PageHeader } from "antd";
import React from "react";
import MenuSidebar from "./MenuSidebar";

type Props = { children: React.ReactNode } & (
  | { header: React.ReactNode }
  | {
      title: string;
      subTitle?: string;
    }
);
export default function MainLayout(props: Props) {
  return (
    <div>
      <MenuSidebar/>
      <main className="md:ml-72 !bg-[#F0F0F0]">
        <header>
          {"header" in props ? (
            props.header
          ) : (
            <PageHeader
              ghost={true}
              // onBack={() => window.history.back()}
              breadcrumb={{
                routes: [
                  {
                    path: "index",
                    breadcrumbName: "First-level Menu",
                  },
                  {
                    path: "first",
                    breadcrumbName: "Second-level Menu",
                  },
                  {
                    path: "second",
                    breadcrumbName: "Third-level Menu",
                  },
                ],
              }}
              title={props.title}
              subTitle={props.subTitle}
            />
          )}
        </header>
        <section className="px-6 py-4 bg-white">{props.children}</section>
        <footer>Footer</footer>
      </main>
    </div>
  );
}
