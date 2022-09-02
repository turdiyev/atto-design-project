import React from "react";

export default function MenuItem({
  children,
  title = "Menu Item",
  withIcon = false,
  withArrowIcon = false,
  withPinIcon = false,
  ...rest
}: Props) {
  return (
    <li className={`
    p-2.5 text-gray-400 rounded 
    flex flex-row flex-nowrap space-x-4 justify-between items-center
    text-sm font-medium hover:bg-secondary
    hover:text-white group cursor-pointer
    `}
    >
      <div
        className="flex flex-row flex-nowrap space-x-4 items-center"
      >
        {children}
        {children === undefined && withIcon &&
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
            </svg>
          </span>
        }

        <h6 className=" text-md font-medium">
          {title}
        </h6>

      </div>

      {withArrowIcon &&
        <div className="flex items-center justify-center min-w-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
          </svg>
        </div>
      }

      {withPinIcon &&
        <div className="flex items-center justify-center min-w-[20px]">
          <svg className="h-4 w-4" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.99992 14.6667V10.5" stroke="#797FA3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.825 10.4999H10.175C10.6308 10.4999 11 10.1308 11 9.67492V9.67492C11 9.40825 10.8717 9.15825 10.6542 9.00325L8.08333 7.16659V4.66659L10.2125 3.24742C10.4442 3.09242 10.5833 2.83242 10.5833 2.55409V2.16659C10.5833 1.70659 10.21 1.33325 9.75 1.33325H2.25C1.79 1.33325 1.41667 1.70659 1.41667 2.16659V2.55409C1.41667 2.83242 1.55583 3.09325 1.7875 3.24742L3.91667 4.66659V7.16659L1.34583 9.00325C1.12833 9.15825 1 9.40825 1 9.67492V9.67492C1 10.1308 1.36917 10.4999 1.825 10.4999V10.4999Z" stroke="#797FA3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      }
    </li>
  );
}


type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode,
  title?: string,
  withIcon?: boolean,
  withArrowIcon?: boolean,
  withPinIcon?: boolean
};