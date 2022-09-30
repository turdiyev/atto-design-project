import { useEffect, useState } from "react";
import { SortDataType } from "./Table.types";

export function useDataChange<T>(
  tableData: T[],
  onSortChange?: (sortData: SortDataType) => void
) {
  const [data, changeData] = useState<T[]>(tableData);
  console.log('UseDataChange', tableData, data)

  const [sortState, setSortState] = useState<SortDataType>({
    order: "none",
    prop: undefined,
  });
  

  useEffect(() => {
    if (sortState) {
      if (onSortChange) {
        onSortChange(sortState);
      }
      console.log("sortState -- ", sortState);
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
      //  if (sortState.order === "none") {
      //    changeData([...data]);
      //  }

    }
   
  }, [onSortChange, sortState]);

  return {
    data,
    changeData,
    sortState,
    setSortState,
  };
}
