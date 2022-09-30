import React from "react";
import { ReactComponent as ArrowLeft } from "./arrow.svg";
export default function MenuItem({
  children,
  title = "Menu Item",
  icon = false,
  withPinIcon = false,
  ...rest
}: Props) {
  return (
    <a
      href="/"
      className={`
    p-3 px-4 text-gray-300 rounded 
    flex flex-row flex-nowrap space-x-4 justify-between items-center
    text-sm font-medium hover:bg-secondary
    hover:text-white group cursor-pointer
    `}
    >
      <span className="flex flex-row flex-nowrap space-x-4 items-center">
        {icon}

        <span className=" text-md font-medium">{title}</span>
      </span>
      <span className="inline-flex">
        {withPinIcon && (
          <span className="flex items-center justify-center min-w-[20px]">
            <svg
              className="h-4 w-4"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.99992 14.6667V10.5"
                stroke="#797FA3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.825 10.4999H10.175C10.6308 10.4999 11 10.1308 11 9.67492V9.67492C11 9.40825 10.8717 9.15825 10.6542 9.00325L8.08333 7.16659V4.66659L10.2125 3.24742C10.4442 3.09242 10.5833 2.83242 10.5833 2.55409V2.16659C10.5833 1.70659 10.21 1.33325 9.75 1.33325H2.25C1.79 1.33325 1.41667 1.70659 1.41667 2.16659V2.55409C1.41667 2.83242 1.55583 3.09325 1.7875 3.24742L3.91667 4.66659V7.16659L1.34583 9.00325C1.12833 9.15825 1 9.40825 1 9.67492V9.67492C1 10.1308 1.36917 10.4999 1.825 10.4999V10.4999Z"
                stroke="#797FA3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
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

type Props = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  children?: React.ReactNode;
  title?: string;
  withPinIcon?: boolean;
  icon?: React.ReactNode;
};
