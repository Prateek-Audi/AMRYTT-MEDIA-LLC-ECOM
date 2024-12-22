"use client";

import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CircularProgress,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Button,
  Pagination,
} from "@nextui-org/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";

const revenueData = [
  { month: "Jan", revenue: 600, sales: 400 },
  { month: "Feb", revenue: 800, sales: 600 },
];

const recentOrders = [
  {
    id: 1,
    product: "Handmade Pouch",
    otherProducts: 3,
    customer: "John Bushmill",
    email: "john@email.com",
    total: 121.0,
    status: "Processing",
  },
];

const cardData = [
  {
    title: "Total Project",
    value: "6,784",
    percentage: "10%",
    percentageColor: "text-green-500",
    dailyChange: "+$150 today",
    icon: <ChevronUp className="w-4 h-4" />,
    badgeUrl: "/assets/card1-badge.svg",
  },
  {
    title: "In Progress",
    value: "1,234",
    percentage: "5%",
    percentageColor: "text-yellow-500",
    dailyChange: "+$50 today",
    icon: <ChevronUp className="w-4 h-4" />,
    badgeUrl: "/assets/card2-badge.svg",
  },
  {
    title: "Finished",
    value: "4,567",
    percentage: "15%",
    percentageColor: "text-green-500",
    dailyChange: "+$200 today",
    icon: <ChevronUp className="w-4 h-4" />,
    badgeUrl: "/assets/card3-badge.svg",
  },
  {
    title: "Unfinished",
    value: "983",
    percentage: "-2%",
    percentageColor: "text-red-500",
    dailyChange: "-$30 today",
    icon: <ChevronUp className="w-4 h-4" />,
    badgeUrl: "/assets/card4-badge.svg",
  },
];

const DashboardPage: React.FC = () => {
  return (
    <div className="px-6 pb-2 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-semibold">Welcome Back Jenil</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor si amet welcome back jenil
          </p>
        </div>
        <Button
          color="default"
          variant="bordered"
          className="text-sm font-normal text-[#4A4C56] border-[#E0E2E7] rounded-lg flex gap-2"
        >
          <Image src={"/assets/calendar.svg"} alt={""} width={16} height={16} />
          Select Dates
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <Card key={index}>
            <CardBody>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{card.title}</span>
                  <Image src={card.badgeUrl} alt={""} width={28} height={28} />
                </div>
                <h3 className="text-2xl font-bold">{card.value}</h3>
                <div className="flex items-center gap-1">
                  <div className={`flex items-center ${card.percentageColor}`}>
                    <span>{card.percentage}</span>
                    {card.icon}
                  </div>
                  <span className="text-sm text-gray-500">
                    {card.dailyChange}
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Target Chart */}
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">Target</h3>
              <p className="text-sm text-gray-500">Revenue Target</p>
            </div>
            <Button isIconOnly variant="light">
              <ChevronDown className="w-5 h-5" />
            </Button>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col items-center">
              <CircularProgress
                size="lg"
                classNames={{
                  base: "max-w-md",
                  track: "drop-shadow-md border border-default",
                  indicator: "bg-gradient-to-r from-blue-500 to-blue-400",
                  label: "tracking-wider font-medium text-default-600",
                  value: "text-blue-500",
                }}
                value={75.55}
                showValueLabel
              />
              <div className="mt-4 text-center">
                <p>You succeed earn $240 today, its higher than yesterday</p>
                <div className="flex justify-between mt-2">
                  <div>
                    <p className="text-sm text-gray-500">Target</p>
                    <p className="font-semibold">$20k</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Revenue</p>
                    <p className="font-semibold">$16k</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Today</p>
                    <p className="font-semibold">$1.5k</p>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Revenue Chart */}
        <Card>
          <CardHeader className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">Statistic</h3>
              <p className="text-sm text-gray-500">Revenue and Sales</p>
            </div>
            <Button isIconOnly variant="light">
              <ChevronDown className="w-5 h-5" />
            </Button>
          </CardHeader>
          <CardBody>
            <LineChart width={500} height={300} data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
              <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
            </LineChart>
          </CardBody>
        </Card>
      </div>

      {/* Recent Orders Table */}
      <Card>
        <CardHeader className="flex justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Recent Orders</h3>
            <Chip
              size="md"
              className="bg-[#E9FAF7] text-sm font-semibol text-[#1A9882] rounded-lg"
            >
              +2 Orders
            </Chip>
          </div>
          <div className="flex gap-2">
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
            <Button className="bg-[#EAF8FF] text-sm font-semibold text-[#2086BF] rounded-lg">
              See All
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <Table aria-label="Recent orders table">
            <TableHeader>
              <TableColumn>PRODUCT</TableColumn>
              <TableColumn>CUSTOMER</TableColumn>
              <TableColumn>TOTAL</TableColumn>
              <TableColumn>STATUS</TableColumn>
              <TableColumn>ACTION</TableColumn>
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
                      size="sm"
                    >
                      {order.status}
                    </Chip>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button isIconOnly size="sm" variant="light">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </Button>
                      <Button isIconOnly size="sm" variant="light">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-between items-center mt-4">
            <p className="text-sm text-gray-500">Showing 1-5 from 100</p>
            <Pagination total={20} boundaries={0} initialPage={1} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardPage;
