import React, { useContext, useId, useState, useEffect } from "react";
import { TableContext, TableProvider } from "./Table.provider";
import { SortDataType, SortStateType } from "./Table.types";

type Props<T> = {
  data: T[];
  headers?: string[];
  defaultExpandAll?: boolean;
  border: boolean;
  rowKeyId: string;
  children: React.ReactElement<ColumnProps<T>>[];
  onSortChange?: (sortData: SortDataType) => void;
};

export default function Table<
  T extends { [key: string]: string | number | boolean }
>({ data, rowKeyId = "id", onSortChange, children }: Props<T>) {
  const [innerData, changeData] = useState<T[]>(data);
  const [sortState, setSortState] = useState<SortDataType>({
    order: "none",
    prop: undefined,
  });

  useEffect(() => {
    if (sortState && onSortChange) {
      onSortChange(sortState);
    }
    console.log('sortState -- ',  sortState);
    if (sortState.order === "asc") {
      changeData((prevData) => {
        prevData.sort(
          (a: any, b: any) =>
            a[sortState.prop as string] - b[sortState.prop as string]
        );

        return [...prevData];
      });
    }
    if (sortState.order === "desc") {
      changeData((prevData) => {
        prevData.sort(
          (a: any, b: any) =>
            b[sortState.prop as string] - a[sortState.prop as string]
        );

        return [...prevData];
      });
    }
    if (sortState.order === "none") {
      changeData((prevData) => [...data]);
    }
  }, [onSortChange, sortState]);
  return (
    <TableProvider sortStateArr={[sortState, setSortState]}>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>{children}</tr>
          </thead>
          <tbody>
            {innerData.map((li, index) => (
              <tr
                key={index || Date.now()}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                {React.Children.map(children, (child) => (
                  <td
                    className={CellClasses[child.props.type || "normal"]}
                    key={child.key}
                    align={child.props.align}
                  >
                    {(child.props.type === "normal" &&
                      child.props?.cellRenderer?.(li)) ||
                      (child.props.prop && li[child.props.prop])}
                    {child.props.type === "selection" && <TableCheckbox />}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TableProvider>
  );
}
type ColumnProps<T> =
  | (React.DetailedHTMLProps<
      React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
      HTMLTableHeaderCellElement
    > & {
      type?: "selection" | "normal" | "index" | "expand";
      prop?: string;
      sortable?: boolean;
      width?: number | string;
      align?: "left" | "center" | "right" | "justify";
      cellRenderer?: (row: T) => React.ReactNode;
    }) &
      (
        | {
            label?: React.ReactNode;
            prop?: string;
          }
        | {
            label: React.ReactNode;
            prop: string;
          }
      );

export function TableColumn<T>({
  label,
  type = "normal",
  prop,
  sortable,

  ...rest
}: ColumnProps<T>) {
  const { sortState, setSortState } = useContext(TableContext);

  const curOrder = sortState?.order || "none";

  function onSortClick(event: React.MouseEvent<HTMLButtonElement>) {
    setSortState((prevState) => ({
      prop,
      order: SortOrderNext[(prevState?.order as string) || "none"],
    }));
  }
  if (typeof rest.width === "number") {
    rest.width = rest.width + "px";
  }
  return (
    <th scope="col" className={CellClasses[type || "normal"]} {...rest}>
      {type === "normal" && label}
      {type === "selection" && <TableCheckbox />}
      {sortable && (
        <button onClick={onSortClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`ml-1 w-3 h-3 ${
              sortState?.prop === prop && SortClasses[curOrder || "none"]
            }`}
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 320 512"
          >
            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
          </svg>
        </button>
      )}
    </th>
  );
}
TableColumn.defaultProps = {
  type: "normal",
  align: "left",
  sortable: false,
};

const SortClasses: { [key: string]: string } = {
  asc: "sorted-asc bg-primary",
  desc: "sorted-desc bg-secondary",
  none: "",
};
const SortOrderNext: SortStateType = {
  none: "asc",
  asc: "desc",
  desc: "none",
};
const CellClasses: { [key: string]: string } = {
  normal: "py-4 px-6",
  undefined: "py-4 px-6",
  selection: "p-4",
  index: "p-4",
  extend: "p-4",
};

function TableCheckbox(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  const labelId = useId();
  return (
    <div className="flex items-center">
      <input
        id={labelId}
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        {...props}
      />
      <label htmlFor={labelId} className="sr-only">
        checkbox
      </label>
    </div>
  );
}
