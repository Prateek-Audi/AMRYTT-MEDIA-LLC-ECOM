"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
  Tab,
  Tabs,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { columns, users } from "./data";
import { SearchIcon } from "./icons";

export type ColumnType = {
  id: number;
};

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];

type User = (typeof users)[0];

const ProductTable = () => {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    return columns.filter((col) => INITIAL_VISIBLE_COLUMNS.includes(col.uid));
  }, []);

  const filteredItems = React.useMemo(() => {
    const filteredUsers = [...users];

    return filteredUsers;
  }, [users, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="flex justify-center items-center gap-2">
            <Link href={`/product/${user.id}`}>
              <Button size="sm" color="primary" variant="light" isIconOnly>
                <Image
                  src={"/assets/pencil-edit.svg"}
                  alt={""}
                  width={16}
                  height={16}
                />
              </Button>
            </Link>
            <Link href={`/product/${user.id}`}>
              <Button size="sm" color="danger" variant="light" isIconOnly>
                <Image
                  src={"/assets/trash-delete.svg"}
                  alt={""}
                  width={16}
                  height={16}
                />
              </Button>
            </Link>
            <Button size="sm" color="default" variant="light" isIconOnly>
              <Image
                src={"/assets/eye-view.svg"}
                alt={""}
                width={16}
                height={16}
              />
            </Button>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex xl:flex lg:flex md:flex sm:flex hidden justify-between gap-3 items-end">
          <Tabs
            variant="bordered"
            classNames={{
              cursor: "bg-[#EAF8FF] rounded-sm",
              tabContent: "group-data-[selected=true]:text-[#2086BF]",
              tabList: "rounded-md shadow-none border-[#E0E2E7]",
            }}
            size="md"
            radius="none"
          >
            <Tab title="All Product"></Tab>
            <Tab title="Published"></Tab>
            <Tab title="Low Stocked"></Tab>
            <Tab title="Draft"></Tab>
          </Tabs>
          <div className="flex xl:flex lg:hidden md:hidden hidden gap-3">
            <Input
              isClearable
              className="w-full sm:max-w-[40%]"
              placeholder="Search product..."
              startContent={<SearchIcon />}
              value={filterValue}
              onClear={() => onClear()}
              onValueChange={onSearchChange}
            />
            <Button
              color="default"
              variant="bordered"
              className="text-sm font-normal text-[#4A4C56] border-[#E0E2E7] rounded-lg flex gap-2"
            >
              <Image
                src={"/assets/calendar.svg"}
                alt={""}
                width={16}
                height={16}
              />
              Select Date
            </Button>

            <Button
              color="default"
              variant="bordered"
              className="text-sm font-normal text-[#4A4C56] border-[#E0E2E7] rounded-lg flex gap-2"
            >
              <Image
                src={"/assets/setting-slider.svg"}
                alt={""}
                width={16}
                height={16}
              />
              Filters
            </Button>

            <Button
              color="default"
              variant="bordered"
              className="text-sm font-normal text-[#4A4C56] border-[#E0E2E7] rounded-lg flex gap-2"
            >
              <Image
                src={"/assets/edit-column.svg"}
                alt={""}
                width={16}
                height={16}
              />
              Edit Column
            </Button>
          </div>
        </div>
      </div>
    );
  }, [
    filterValue,
    onSearchChange,
    onRowsPerPageChange,
    users.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${filteredItems.length} selected`}
        </span>
        <Pagination
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages + 5}
          onChange={setPage}
          boundaries={0}
        />
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <Table
      isHeaderSticky
      aria-label="Example table with custom cells, pagination and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="inside"
      classNames={{
        wrapper: "max-h-full",
      }}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ProductTable;
