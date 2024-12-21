import React from "react";
import { Column } from "@/types/data-table";

type Props<T> = {
  columns: Column<T>[];
  data: T[];
};

const ServerSideTable = <T,>({ columns: columns, data }: Props<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border border-[#CDCDCD]">
        <thead>
          <tr className="bg-[#D9EFD9]">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-2 text-left text-sm font-medium text-[#343434]"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-4 py-2 text-xs text-[#6F6F6F] font-normal"
                  >
                    {column.renderCell
                      ? column.renderCell(row, index)
                      : String(row[column.key as keyof T]) || ""}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-4 text-gray-500"
              >
                No data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ServerSideTable;
