export type DispatcherState<T> = (update: T | ((prevState: T) => T)) => void
export type SortOrder = "asc" | "desc"  | "none";

export type SortStateType = { [key: string]: SortOrder }
export type SortDataType = { order: SortOrder, prop?: string }