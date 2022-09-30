import React, { useMemo, useState, useReducer } from "react";
import { DispatcherState, SortDataType, SortStateType } from "./Table.types";

interface TableContextType {
  sortState?: SortDataType;
  setSortState: DispatcherState<SortDataType>;
}
export const TableContext = React.createContext<TableContextType>(
  {} as TableContextType
);
export function TableProvider(
  props: React.PropsWithChildren<{
    sortStateArr: [SortDataType, DispatcherState<SortDataType>];
  }>
) {
  const [sortState, setSortState] = props.sortStateArr;
  const value = useMemo(
    () => ({
      sortState,
      setSortState,
    }),
    [sortState]
  );
  console.log("value -- ", value);
  return (
    <TableContext.Provider value={value}>
      {props.children}
    </TableContext.Provider>
  );
}

// enum TableActionKind {
//   INCREASE = 'INCREASE',
//   DECREASE = 'DECREASE',
// }

// // An interface for our actions
// interface TableAction {
//   type: TableActionKind;
//   payload: number;
// }

// // An interface for our state
// interface TableState<T> {
//   data: T[];
// }

// // Our reducer function that uses a switch statement to handle our actions
// function tableReducer<T>(state: TableState<T>, action: TableAction) {
//   const { type, payload } = action;
//   switch (type) {
//     case TableActionKind.SORT_DESC:
//       return {
//         ...state,
//         data: state.data + payload,
//       };
//     case TableActionKind.DECREASE:
//       return {
//         ...state,
//         value: state.data - payload,
//       };
//     default:
//       return state;
//   }
// }
