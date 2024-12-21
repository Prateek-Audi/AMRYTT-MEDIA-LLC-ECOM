"use client";

import React, { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import { DataTableProps } from "@/types/data-table";
import { getNestedValueSearch } from "@/lib/utils";
import styles from "./DataTable.module.css";

const DataTable: React.FC<DataTableProps> = ({
  columns = [],
  data = [],
  rowsPerPage = 10,
  searchKey,
  currentSearch = "",
  filters = {},
  onPageChange,
  wrapperClassName = "max-h-[56vh] rounded-[0px]",
}) => {
  const [page, setPage] = useState(1);

  const filteredData = useMemo(() => {
    if (!data || data.length === 0) {
      return [];
    }
    return data.filter((item) => {
      // Improved search matching
      const searchValue = searchKey
        ? getNestedValueSearch(item, searchKey)
        : JSON.stringify(item);

      const matchesSearch = currentSearch
        ? String(searchValue)
            .toLowerCase()
            .includes(currentSearch.toLowerCase())
        : true;

      // Matches all filters
      const matchesFilters = Object.entries(filters).every(([key, value]) =>
        value === "ALL" ? true : getNestedValueSearch(item, key) === value
      );

      return matchesSearch && matchesFilters;
    });
  }, [data, currentSearch, filters, searchKey]);

  // Pagination
  const pages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const dynamicWrapperHeight = useMemo(() => {
    if (filteredData.length <= rowsPerPage) {
      return "max-h-[60vh]";
    }
    return `${wrapperClassName}`;
  }, [filteredData.length, rowsPerPage]);

  // Page Change Handlers
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    onPageChange?.(newPage);
  };

  // useEffect(() => {
  //   console.log("testing:", currentSearch, filters);
  //   setPage(1);
  // }, [currentSearch, filters]);

  return (
    <div className="max-h-[calc(100%-2rem)]">
      <Table
        aria-label="Dynamic data table"
        isHeaderSticky
        bottomContent={
          pages > 1 ? (
            <div className="flex justify-center pb-4">
              <Pagination
                isCompact
                showControls
                total={pages}
                page={page}
                onChange={handlePageChange}
                classNames={{
                  cursor: "bg-[#318531] text-white font-bold",
                  item: "bg-white",
                  base: "p-2",
                  next: "bg-white",
                  prev: "bg-white",
                }}
              />
            </div>
          ) : null
        }
        classNames={{
          wrapper: `${dynamicWrapperHeight} ${wrapperClassName} overflow-y-auto custom-scrollbar p-0 shadow-none`,
          th: `bg-[#D9EFD9] rounded-[0px] px-8 ${styles.th}`,
          td: "px-8 rounded-none",
        }}
        bottomContentPlacement="outside"
      >
        <TableHeader>
        {columns.length > 0 ? (
            columns.map((column) => (
              <TableColumn
                className="text-sm text-[#6F6F6F] capitalize"
                key={column.key}
              >
                {column.label}
              </TableColumn>
            ))
          ) : (
            <TableColumn>No Columns</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={
            columns.length === 0 
              ? "No columns defined" 
              : "No data found"
          }>
          {paginatedData.map((item, index) => (
            <TableRow
              key={index}
              className={`border-b border-[#D9EFD9] ${styles.tr}`}
            >
              {columns.map((column) => (
                <TableCell className="text-xs text-[#6F6F6F]" key={column.key}>
                  {column.renderCell
                    ? column.renderCell(item, index)
                    : String(getNestedValueSearch(item, column.key) ?? "")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
