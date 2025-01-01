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
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { columns, users } from "./data";
import { SearchIcon } from "./icons";
import styles from "./style.module.css";
import FilterDropdown from "../DropdownFilter/Filter";
import DatePicker from "../DatePicker";
import ColumnEditor from "../DropdownFilter/ColumnEditor";
import Breadcrumb from "../BreadCrumb";

export type ColumnType = {
  id: number;
};

const statusColorMap: Record<string, ChipProps["color"]> = {
  Published: "success",
  "Out of Stock": "danger",
  "Low Stock": "warning",
  Draft: "default",
};

const INITIAL_VISIBLE_COLUMNS = [
  "product",
  "sku",
  "category",
  "stock",
  "price",
  "status",
  "added",
  "actions",
];

type User = (typeof users)[0];

const ProductTable = () => {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);
  const [datePickerOpen, setDatePickerOpen] = React.useState(false);
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [columnEditorOpen, setColumnEditorOpen] = React.useState(false);

  const handleDatePickerToggle = React.useCallback(() => {
    setDatePickerOpen(!datePickerOpen);
    setFilterOpen(false);
    setColumnEditorOpen(false);
  }, []);

  const handleFilterToggle = React.useCallback(() => {
    setFilterOpen(!filterOpen);
    setDatePickerOpen(false);
    setColumnEditorOpen(false);
  }, []);

  const handleColumnEditorToggle = React.useCallback(() => {
    setColumnEditorOpen(!columnEditorOpen);
    setDatePickerOpen(false);
    setFilterOpen(false);
  }, []);

  const handleDatePickerClose = React.useCallback(() => {
    setDatePickerOpen(false);
  }, []);

  const handleFilterClose = React.useCallback(() => {
    setFilterOpen(false);
  }, []);

  const handleColumnEditorClose = React.useCallback(() => {
    setColumnEditorOpen(false);
  }, []);

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

  const renderCell = React.useCallback(
    (product: User, columnKey: React.Key) => {
      const cellValue = product[columnKey as keyof User];

      switch (columnKey) {
        case "product":
          return (
            <User
              avatarProps={{ radius: "lg", src: product.image }}
              description={`${product.variants} Variants`}
              name={product.name}
            />
          );
        case "sku":
          return (
            <p className="text-sm text-[#2086BF] font-semibold">
              {product.sku}
            </p>
          );
        case "price":
          return `$${product.price.toFixed(2)}`;
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[product.status]}
              size="sm"
              variant="flat"
            >
              {product.status}
            </Chip>
          );
        case "actions":
          return (
            <div className="flex justify-center items-center">
              <Link href={`/product/Edit-Product`}>
                <Button size="sm" color="primary" variant="light" isIconOnly>
                  <Image
                    src="/assets/pencil-edit.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </Button>
              </Link>
              <Link href={`/product/${product.id}`}>
                <Button size="sm" color="default" variant="light" isIconOnly>
                  <Image
                    src="/assets/eye-view.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </Button>
              </Link>
              <Button size="sm" color="danger" variant="light" isIconOnly>
                <Image
                  src="/assets/trash-delete.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </Button>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

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
              className="w-full sm:max-w-[40%] text-sm font-normal text-[#4A4C56]"
              placeholder="Search product..."
              startContent={<SearchIcon />}
              value={filterValue}
              onClear={() => onClear()}
              onValueChange={onSearchChange}
              variant="bordered"
            />
            <Popover
              isOpen={datePickerOpen}
              onOpenChange={setDatePickerOpen}
              placement="bottom"
            >
              <PopoverTrigger>
                <Button
                  color="default"
                  variant="bordered"
                  className="text-sm font-normal text-[#858D9D] border-[#E0E2E7] rounded-lg flex gap-2"
                  onClick={handleDatePickerToggle}
                >
                  <Image
                    src={"/assets/calendar.svg"}
                    alt={""}
                    width={16}
                    height={16}
                  />
                  Select Date
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <DatePicker onCancel={handleDatePickerClose} />
              </PopoverContent>
            </Popover>
            <Popover
              isOpen={filterOpen}
              onOpenChange={setFilterOpen}
              placement="bottom"
            >
              <PopoverTrigger>
                <Button
                  color="default"
                  variant="bordered"
                  onClick={handleFilterToggle}
                  className="text-sm font-normal text-[#858D9D] border-[#E0E2E7] rounded-lg flex gap-2"
                >
                  <Image
                    src={"/assets/setting-slider.svg"}
                    alt={""}
                    width={16}
                    height={16}
                  />
                  Filters
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <FilterDropdown onClose={handleFilterClose} />
              </PopoverContent>
            </Popover>
            <Popover
              isOpen={columnEditorOpen}
              onOpenChange={setColumnEditorOpen}
              placement="bottom"
            >
              <PopoverTrigger>
                <Button
                  color="default"
                  variant="bordered"
                  onClick={handleColumnEditorToggle}
                  className="text-sm font-normal text-[#858D9D] border-[#E0E2E7] rounded-lg flex gap-2"
                >
                  <Image
                    src={"/assets/edit-column.svg"}
                    alt={""}
                    width={16}
                    height={16}
                  />
                  Edit Column
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <ColumnEditor onClose={handleColumnEditorClose} />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    );
  }, [
    filterValue,
    datePickerOpen,
    filterOpen,
    columnEditorOpen,
    onRowsPerPageChange,
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
          loop
          classNames={{
            item: "bg-[#EAF8FF]",
            cursor: "bg-[#2086BF]",
            next: "bg-[#EAF8FF]",
            prev: "bg-[#EAF8FF]",
          }}
          page={page}
          total={pages + 5}
          onChange={setPage}
          boundaries={0}
          initialPage={1}
        />
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <div className="w-full h-full flex flex-col">
      <div
        className={`flex items-center justify-between ${styles["breadcrumb-add"]}`}
      >
        <Breadcrumb />
        <div className="flex items-center gap-2">
          <Button
            size="md"
            color="primary"
            variant="light"
            isIconOnly
            className="w-fit flex items-center gap-3 px-4 bg-[#EAF8FF] rounded-lg"
          >
            <Image src="/assets/download.svg" alt="" width={16} height={16} />
            <span className="ml-2 text-sm font-semibold text-[#2086BF]">
              Export
            </span>
          </Button>
          <Button
            size="md"
            color="primary"
            isIconOnly
            className="w-fit flex items-center gap-3 px-4 text-white bg-[#2086BF] rounded-lg"
          >
            <Image src="/assets/add.svg" alt="" width={16} height={16} />
            <span className="ml-2 text-sm font-semibold text-white">
              Add Product
            </span>
          </Button>
        </div>
      </div>

      <Table
        isHeaderSticky
        aria-label="Example table with custom cells, pagination and sorting"
        bottomContent={bottomContent}
        bottomContentPlacement="inside"
        classNames={{
          wrapper: "p-0 border-none shadow-none overflow-y-hidden",
          th: `bg-white text-[#1D1F2C] py-6 px-6 ${styles.th}`,
          td: "px-6 py-4",
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
    </div>
  );
};

export default ProductTable;
