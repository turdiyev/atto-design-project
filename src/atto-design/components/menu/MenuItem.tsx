import React, { useState } from "react";
import { ReactComponent as ArrowLeft } from "./arrow.svg";
import { ReactComponent as PinIcon } from "assets/pin-big.svg";
import { ReactComponent as PinnedIcon } from "assets/pinned.svg";

export default function MenuItem(props: MenuItemProps) {
  const [submenu, showSubmenu] = useState(false);
  const {
    children,
    title = "Menu Item",
    icon = false,
    pinnable = false,
    isPinned = false,
    pinOnClick,
  } = props;

  const onPinClick = (event: React.MouseEvent<any>) => {
    if (event) event.preventDefault();
    pinOnClick?.(props);
  };
  const onHover = (event: React.MouseEvent<any>) => {
    showSubmenu(true);
  };
  const onMouseLeave = (event: React.MouseEvent<any>) => {
    showSubmenu(false);
  };
  return (
    <a
      href="/"
      className={`
    p-3 px-4 text-gray-300 group rounded 
    flex flex-row flex-nowrap space-x-4 justify-between items-center
    text-sm font-medium hover:bg-secondary
    hover:text-white group cursor-pointer
    relative
    `}
      onMouseOver={onHover}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-row flex-nowrap space-x-4 items-center">
        {icon}

        <span className=" text-md font-medium">{title}</span>
        <div>
          {typeof children === "function" ? children?.(submenu) : children}
        </div>
      </div>
      <span className="inline-flex">
        {pinnable ? (
          <span
            className="flex items-center justify-center min-w-[20px]"
            style={
              (isPinned && {
                filter:
                  "invert(50%) sepia(99%) saturate(348%) hue-rotate(93deg) brightness(92%) contrast(88%)",
              }) ||
              undefined
            }
          >
            <PinIcon onClick={onPinClick} />
          </span>
        ) : (
          isPinned && (
            <span className="flex items-center justify-center min-w-[20px]">
              <PinnedIcon />
            </span>
          )
        )}

        {children && (
          <div className="flex items-center justify-center min-w-[20px]">
            <ArrowLeft />
          </div>
        )}
      </span>
    </a>
  );
}

export interface MenuItemProps {
  children?: ((visible: boolean) => React.ReactNode) | React.ReactNode;
  title: string;
  pinnable?: boolean;
  isPinned?: boolean;
  icon?: React.ReactNode;
  pinOnClick?: (props: MenuItemProps) => void;
}
