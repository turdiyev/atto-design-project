import React, { useLayoutEffect, useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import { MenuItem } from "atto-design/components";
import type { MenuItemProps } from "atto-design/components";
import { ReactComponent as HomeIcon } from "assets/menu/bus-1.svg";
import { ReactComponent as DiagramIcon } from "assets/menu-icons/diagram.svg";
import { ReactComponent as HistoryIcon } from "assets/menu-icons/history.svg";
import { ReactComponent as ReportIcon } from "assets/menu-icons/report.svg";
import { ReactComponent as SummaryIcon } from "assets/menu-icons/summary.svg";
import { ReactComponent as TarifIcon } from "assets/menu-icons/tarif.svg";
import { ReactComponent as BusIcon } from "assets/menu-icons/bus.svg";
import { ReactComponent as QRIcon } from "assets/menu-icons/qr-icon.svg";
import { ReactComponent as ZReportIcon } from "assets/menu-icons/z-report.svg";
export default function MenuSidebar() {
  const [pinnedItems, setPinnedItems] = useState<{
    [key: string]: MenuItemProps | null;
  }>({});
  const onPinItemClick = (item: MenuItemProps) => {
    const foundItem = pinnedItems[item.title];

    if (foundItem) {
      setPinnedItems((map) => ({
        ...map,
        [item.title]: null,
      }));
    } else {
      setPinnedItems((map) => ({
        ...map,
        [item.title]: item,
      }));
    }
  };
  return (
    <div className="bg-[#1F2A66] md:w-72 z-20 fixed overflow-auto  top-0 left-0 bottom-0 h-full">
      <div
        className={` flex transition-hidden duration-75 lg:flex  lefy-0  h-full min-h-screen py-4 flex-col justify-between`}
      >
        <div className="flex-col space-y-5">
          <div className="flex flex-row space-x-4 items-center justify-between ml-2 py-2 px-4">
            <h6 className="text-2xl text-white ">
              <img src={"/atto-logo.svg"} alt="ATTO logo" />
            </h6>

            <span className="hover:cursor-pointer pr-2 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </div>
          <nav className="px-2">
            <h4 className="text-xs text-white/40 px-4 mb-3 font-bold ">
              Закрепленные
            </h4>
            <ul className="flex flex-col space-y-2 pl-0">
              <MenuItem
                title="Hello"
                icon={
                  <HomeIcon
                    style={{
                      filter:
                        "invert(50%) sepia(99%) saturate(348%) hue-rotate(93deg) brightness(92%) contrast(88%)",
                    }}
                  />
                }
              ></MenuItem>

              {Object.keys(pinnedItems)
                .filter((key) => pinnedItems[key])
                .map((key) => (
                  <MenuItem
                    {...(pinnedItems?.[key] || { title: "" })}
                    pinnable={false}
                    isPinned
                  ></MenuItem>
                ))}
            </ul>
          </nav>
          <nav className="px-2">
            <h4 className="text-xs text-white/40 px-4 mb-3 font-bold ">
              Показатели
            </h4>
            <ul className="flex flex-col space-y-2 pl-0">
              {MenuItems.map((li) => (
                <MenuItem title={li.title} icon={li.icon}>
                  {(visible) => (
                    <SubMenu visible={visible}>
                      {li.children?.map((li2) => (
                        <nav className="px-2">
                          <h4 className="text-xs text-white/40 px-4 mb-3 font-bold ">
                            {li2.title}
                          </h4>
                          <ul className="flex flex-col space-y-2 pl-0">
                            {li2.children?.map((li3) => (
                              <MenuItem
                                title={li3.title}
                                icon={li3.icon}
                                pinnable={!li3.children}
                                isPinned={!!pinnedItems[li3.title]}
                                pinOnClick={onPinItemClick}
                              />
                            ))}
                          </ul>
                        </nav>
                      ))}
                    </SubMenu>
                  )}
                </MenuItem>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex-col space-y-4 mb-0">
          <ul className="flex flex-col space-y-2 ">
            <li
              className={`p-2.5 text-gray-400 rounded flex flex-row flex-nowrap space-x-4 items-center text-sm font-medium hover:bg-secondary hover:text-white group cursor-pointer`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
              </span>
              <h6 className=" text-md font-medium">Выйти</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const SubMenu = React.forwardRef(
  (
    { children, visible }: React.PropsWithChildren<{ visible: boolean }>,
    ref: any
  ) => {
    const nodeRef = useRef(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const onVisibleEnter = () => {
      const el = wrapperRef.current;

      const rect = el?.parentElement?.getBoundingClientRect();
      console.log("rect --- ", rect, el);
      if (rect) {
        if (rect.top < 0) {
          wrapperRef.current?.parentElement?.classList.add("!top-0");
        }
        if (rect.bottom > window.innerHeight) {
          wrapperRef.current?.parentElement?.classList.add("!bottom-0");
        }
        if (rect.top > rect.height / 2 && rect.bottom < window.outerHeight) {
          wrapperRef.current?.parentElement?.classList.add("-translate-y-1/2");
        }
      }
    };
    return (
      <CSSTransition
        in={visible}
        nodeRef={nodeRef}
        timeout={100}
        classNames="!translate-x-0 !z-10 !opacity-100 "
        unmountOnExit
        onEntering={onVisibleEnter}
        onExited={onVisibleEnter}
      >
        <div
          ref={nodeRef}
          className=" -z-10 -translate-x-4 fixed bg-[#1F2A66] left-72 rounded-xl overflow-hidden drop-shadow-2xl transition-transform duration-500"
        >
          <div
            ref={wrapperRef}
            className="flex flex-col space-y-4 my-5 border-solid border-0 border-l border-white/10 overflow-auto max-h-screen"
          >
            {children}
          </div>
        </div>
      </CSSTransition>
    );
  }
);

type MenuItemType = Omit<MenuItemProps, "children"> & {
  children?: MenuItemType[];
};
const MenuItems: MenuItemType[] = [
  {
    title: "Диаграммы",
    icon: <DiagramIcon />,
    children: [
      {
        title: "",
        children: [],
      },
    ],
  },
  {
    title: "История",
    icon: <HistoryIcon />,
    children: [],
  },
  {
    title: "Отчеты",
    icon: <ReportIcon />,
    children: [
      {
        title: "Автобусы",
        children: [
          {
            title: "Автобусы",
            icon: <BusIcon />,
          },
          {
            title: "Z-отчет автобусы",
            icon: <ZReportIcon />,
          },
          {
            title: "Z-отчет мобильный",
            icon: <ZReportIcon />,
          },
          {
            title: "Автобусы Агр. QR",
            icon: <QRIcon />,
          },
          {
            title: "Автобусы АТТО Агр. QR",
            icon: <QRIcon />,
          },
        ],
      },
      {
        title: "Автобусы",
        children: [
          {
            title: "Автобусы",
            icon: <BusIcon />,
          },
          {
            title: "Z-отчет автобусы",
            icon: <ZReportIcon />,
          },
          {
            title: "Z-отчет мобильный",
            icon: <ZReportIcon />,
          },
          {
            title: "Автобусы Агр. QR",
            icon: <QRIcon />,
          },
          {
            title: "Автобусы АТТО Агр. QR",
            icon: <QRIcon />,
          },
        ],
      },
      {
        title: "Автобусы",
        children: [
          {
            title: "Автобусы",
            icon: <BusIcon />,
          },
          {
            title: "Z-отчет автобусы",
            icon: <ZReportIcon />,
          },
          {
            title: "Z-отчет мобильный",
            icon: <ZReportIcon />,
          },
          {
            title: "Автобусы Агр. QR",
            icon: <QRIcon />,
          },
          {
            title: "Автобусы АТТО Агр. QR",
            icon: <QRIcon />,
          },
        ],
      },
      {
        title: "Автобусы",
        children: [
          {
            title: "Автобусы",
            icon: <BusIcon />,
          },
          {
            title: "Z-отчет автобусы",
            icon: <ZReportIcon />,
          },
          {
            title: "Z-отчет мобильный",
            icon: <ZReportIcon />,
          },
          {
            title: "Автобусы Агр. QR",
            icon: <QRIcon />,
          },
          {
            title: "Автобусы АТТО Агр. QR",
            icon: <QRIcon />,
          },
        ],
      },
    ],
  },
  {
    title: "Сводка",
    icon: <SummaryIcon />,
    children: [
      {
        title: "Автобусы",
        children: [
          {
            title: "Автобусы",
            icon: <BusIcon />,
          },
          {
            title: "Z-отчет автобусы",
            icon: <ZReportIcon />,
          },
          {
            title: "Z-отчет мобильный",
            icon: <ZReportIcon />,
          },
          {
            title: "Автобусы Агр. QR",
            icon: <QRIcon />,
          },
          {
            title: "Автобусы АТТО Агр. QR",
            icon: <QRIcon />,
          },
        ],
      },
    ],
  },
  {
    title: "Тарифы",
    icon: <TarifIcon />,
    children: [
      {
        title: "Автобусы",
        children: [
          {
            title: "Автобусы",
            icon: <BusIcon />,
          },
          {
            title: "Z-отчет автобусы",
            icon: <ZReportIcon />,
          },
          {
            title: "Z-отчет мобильный",
            icon: <ZReportIcon />,
          },
          {
            title: "Автобусы Агр. QR",
            icon: <QRIcon />,
          },
          {
            title: "Автобусы АТТО Агр. QR",
            icon: <QRIcon />,
          },
        ],
      },
    ],
  },
];
