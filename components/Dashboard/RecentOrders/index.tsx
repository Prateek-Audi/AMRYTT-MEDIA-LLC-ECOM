import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Pagination,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from "@nextui-org/react";
import Image from "next/image";
import { recentOrders } from "../data";
import styles from "./styles.module.css";
import { useState } from "react";
import DatePicker from "@/components/DatePicker";
import FilterDropdown from "@/components/DropdownFilter/Filter";

const RecentOrders: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleCancel = () => {
    setIsOpen(false);
  };
  const handleFilterClose = () => {
    setIsOpen(false);
  };

  return (
    <Card className="xl:col-span-2 lg:col-span-1 md:col-span-1 cursor-pointer shadow-none hover:shadow-lg">
      <CardHeader className="flex justify-between p-6">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Recent Orders</h3>
          <Chip
            size="md"
            className={`bg-[#E9FAF7] text-sm font-bold text-[#1A9882] rounded-lg ${styles["see-all"]}`}
          >
            +2 Orders
          </Chip>
        </div>
        <div className="flex gap-2">
          <Popover
            isOpen={isOpen}
            onOpenChange={(open) => setIsOpen(open)}
            placement="bottom"
          >
            <PopoverTrigger>
              <Button
                color="default"
                variant="bordered"
                className="text-sm font-normal text-[#858D9D] border-[#E0E2E7] rounded-lg flex gap-2"
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
              <DatePicker onCancel={handleCancel} />
            </PopoverContent>
          </Popover>
          <Popover
            isOpen={isFilterOpen}
            onOpenChange={(open) => setIsFilterOpen(open)}
            placement="bottom"
          >
            <PopoverTrigger>
              <Button
                color="default"
                variant="bordered"
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
          <Button
            className={`bg-[#EAF8FF] text-sm font-semibold text-[#2086BF] rounded-lg ${styles["see-all"]}`}
          >
            See All
          </Button>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <Table
          className="p-0"
          aria-label="Recent orders table"
          classNames={{
            wrapper: "border-none rounded-none shadow-none p-0 gap-0",
            th: `bg-[#F9F9FC] text-[#1D1F2C] py-6 px-6 ${styles.th}`,
            td: "px-6 py-4",
          }}
          bottomContent={
            <div className="flex justify-between items-center py-4 px-6">
              <p className="text-sm text-gray-500">Showing 1-5 from 100</p>
              <Pagination
                loop
                classNames={{
                  item: "bg-[#EAF8FF]",
                  cursor: "bg-[#2086BF]",
                  next: "bg-[#EAF8FF]",
                  prev: "bg-[#EAF8FF]",
                }}
                showControls
                total={10}
                boundaries={0}
                initialPage={1}
              />
            </div>
          }
        >
          <TableHeader>
            <TableColumn>
              <div className="flex justify-between items-center w-full">
                PRODUCT
                <Image
                  src={"/assets/caret-down.svg"}
                  alt={""}
                  width={16}
                  height={16}
                />
              </div>
            </TableColumn>
            <TableColumn>
              <div className="flex justify-between items-center w-full">
                CUSTOMER
                <Image
                  src={"/assets/caret-down.svg"}
                  alt={""}
                  width={16}
                  height={16}
                />
              </div>
            </TableColumn>
            <TableColumn>
              <div className="flex justify-between items-center w-full">
                TOTAL
                <Image
                  src={"/assets/caret-down.svg"}
                  alt={""}
                  width={16}
                  height={16}
                />
              </div>
            </TableColumn>
            <TableColumn>
              <div className="flex justify-between items-center w-full">
                STATUS
                <Image
                  src={"/assets/caret-down.svg"}
                  alt={""}
                  width={16}
                  height={16}
                />
              </div>
            </TableColumn>
            <TableColumn className="text-right">ACTION</TableColumn>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <User
                    name={order.product}
                    description={`+${order.otherProducts} other products`}
                    avatarProps={{
                      src: "/placeholder-product.png",
                      radius: "sm",
                    }}
                  />
                </TableCell>
                <TableCell>
                  <div>
                    <p>{order.customer}</p>
                    <p className="text-sm text-gray-500">{order.email}</p>
                  </div>
                </TableCell>
                <TableCell>${order.total}</TableCell>
                <TableCell>
                  <Chip
                    color={
                      order.status === "Processing" ? "warning" : "success"
                    }
                    className={
                      order.status === "Processing"
                        ? "bg-[#FFF0EA] p-2 text-[#F86624] text-sm font-semibold"
                        : order.status === "Shipped"
                        ? "bg-[#EAF8FF] p-2 text-[#2BB2FE] text-sm font-semibold"
                        : "bg-[#E9FAF7] p-2 text-[#1A9882] text-sm font-semibold"
                    }
                    size="sm"
                    radius="sm"
                  >
                    {order.status}
                  </Chip>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2">
                    <Button isIconOnly size="sm" variant="light">
                      <Image
                        src={"/assets/eye-view.svg"}
                        alt={""}
                        width={16}
                        height={16}
                      />
                    </Button>
                    <Button isIconOnly size="sm" variant="light">
                      <Image
                        src={"/assets/trash-delete.svg"}
                        alt={""}
                        width={16}
                        height={16}
                      />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default RecentOrders;
