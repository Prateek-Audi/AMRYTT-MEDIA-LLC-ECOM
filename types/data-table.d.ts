export type Column<T> = {
  key: string;
  label: string;
  renderCell?: (row: T, index: number) => React.ReactNode;
};

export type DataTableProps = {
  columns: Column<T>[];
  data: T[];
  rowsPerPage: number;
  onPageChange?: (page: number) => void;
  searchKey?: keyof T;
  currentSearch?: string;
  filters?: Record<string, string>;
  wrapperClassName?: string;
};
