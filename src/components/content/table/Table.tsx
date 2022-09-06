import React from "react";

type Props<T> = {
  data: T[];
  headers?: string[];
  defaultExpandAll?: boolean;
  border: boolean;
  rowKeyId: string;
  children: React.ReactElement<ColumnProps<T>>[];
};

export default function Table<
  T extends { [key: string]: string | number | boolean }
>({ data, rowKeyId = "id", children }: Props<T>) {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>{children}</tr>
        </thead>
        <tbody>
          {data.map((li, index) => (
            <tr
              key={index || Date.now()}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {React.Children.map(children, (child) => (
                <td className="p-4 w-4" key={child.key} align={child.props.align}>
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
  if(typeof(rest.width) === 'number'){
    rest.width = rest.width + 'px'
  }
  return (
    <th scope="col" className="py-3 px-4" {...rest}>
      {type === "normal" && label}
      {type === "selection" && <TableCheckbox />}
    </th>
  );
}
TableColumn.defaultProps = {
  type: "normal",
  align: "left",
  sortable: false,
};

function TableCheckbox(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <div className="flex items-center">
      <input
        id="checkbox-table-search-3"
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        {...props}
      />
      <label htmlFor="checkbox-table-search-3" className="sr-only">
        checkbox
      </label>
    </div>
  );
}
