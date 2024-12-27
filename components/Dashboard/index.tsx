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
  Progress,
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
import Image from "next/image";
import {
  categories,
  customers,
  recentOrders,
  revenueData,
  salesData,
  topProducts,
} from "./data";

const cardData = [
  {
    title: "Total Project",
    value: "6,784",
    percentage: "10%",
    percentageColor: "text-[#1A9882]",
    dailyChange: "+$150 today",
    icon: (
      <Image src={"/assets/up-caret.svg"} alt={""} width={20} height={20} />
    ),
    badgeUrl: "/assets/card1-badge.svg",
  },
  {
    title: "In Progress",
    value: "1,234",
    percentage: "5%",
    percentageColor: "text-[#1A9882]",
    dailyChange: "+$50 today",
    icon: (
      <Image src={"/assets/up-caret.svg"} alt={""} width={20} height={20} />
    ),
    badgeUrl: "/assets/card2-badge.svg",
  },
  {
    title: "Finished",
    value: "4,567",
    percentage: "15%",
    percentageColor: "text-[#1A9882]",
    dailyChange: "+$200 today",
    icon: (
      <Image src={"/assets/up-caret.svg"} alt={""} width={20} height={20} />
    ),
    badgeUrl: "/assets/card3-badge.svg",
  },
  {
    title: "Unfinished",
    value: "983",
    percentage: "+2%",
    percentageColor: "text-[#1A9882]",
    dailyChange: "+$30 today",
    icon: (
      <Image src={"/assets/up-caret.svg"} alt={""} width={20} height={20} />
    ),
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
          className="text-sm font-normal text-[#4A4C56] border-[#E0E2E7] rounded-lg flex gap-2 cursor-pointer"
        >
          <Image src={"/assets/calendar.svg"} alt={""} width={16} height={16} />
          Select Dates
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} className="cursor-pointer shadow hover:shadow-lg">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Target Chart - Smaller Card */}
        <Card className="col-span-1 cursor-pointer shadow-md hover:shadow-lg p-4">
          <CardHeader className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">Target</h3>
              <p className="text-sm text-gray-500">Revenue Target</p>
            </div>
            <Button isIconOnly variant="light" size="sm">
              <Image
                src={"/assets/menu-dots.svg"}
                alt={""}
                width={16}
                height={16}
              />
            </Button>
          </CardHeader>

          <CardBody>
            <div className="flex flex-col items-center space-y-4">
              {/* Circular Progress */}
              <div className="relative flex justify-center items-center">
                <div style={{ clipPath: "inset(0 0 50% 0)" }}>
                  <CircularProgress
                    classNames={{
                      svg: "w-60 h-60 xl:w-60 xl:h-60 lg:w-48 lg:h-48 md:w-60 md:h-60",
                      indicator: "stroke-blue-500",
                      track: "stroke-blue-100",
                    }}
                    value={salesData.percentage}
                    strokeWidth={2}
                    showValueLabel={true}
                    valueLabel={
                      <div
                        className="text-center"
                        style={{ transform: "translateY(-50%)" }}
                      >
                        <div className="text-2xl font-bold">
                          {(salesData.total / 1000).toFixed(1)}
                        </div>
                        <div className="text-sm font-medium text-green-500 bg-green-100 px-2 py-0.5 rounded-full">
                          +{salesData.percentage}%
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
              {/* Text */}
              <p className="absolute bottom-24 text-center text-sm text-gray-600">
                You succeed earn
                <span className="font-bold text-gray-800">$240</span> today, its
                higher than yesterday
              </p>

              {/* Statistics */}
              <div className="absolute bottom-8 flex justify-between w-full mt-4 text-center">
                <div>
                  <p className="text-sm text-gray-500">Target</p>
                  <p className="font-bold text-red-500">$20k</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Revenue</p>
                  <p className="font-bold text-green-500">$16k</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Today</p>
                  <p className="font-bold text-green-500">$1.5k</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Revenue Chart - Larger Card */}
        <Card className="col-span-2 cursor-pointer shadow hover:shadow-lg">
          <CardHeader className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold">Statistic</h3>
              <p className="text-sm text-gray-500">Revenue and Sales</p>
            </div>
            <Button isIconOnly variant="light" size="sm">
              <Image
                src={"/assets/menu-dots.svg"}
                alt={""}
                width={16}
                height={16}
              />
            </Button>
          </CardHeader>

          <CardBody>
            <LineChart width={780} height={300} data={revenueData}>
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

      {/* Sales Source, Top Product, Top Category */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4 ">
        {/* Sales Source Card */}
        <Card className="w-full p-4">
          <CardHeader className="flex justify-between">
            <p className="text-lg">Sales Source</p>
            <button className="text-gray-400">⋮</button>
          </CardHeader>
          <CardBody>
            <div className="relative flex justify-center items-center">
              <CircularProgress
                classNames={{
                  svg: "w-60 h-60 xl:w-60 xl:h-60 lg:w-48 lg:h-48 md:w-60 md:h-60",
                  indicator: "stroke-blue-500",
                  track: "stroke-blue-100",
                }}
                value={salesData.percentage}
                strokeWidth={2}
                showValueLabel={true}
                valueLabel={
                  <div className="text-center">
                    <div className="text-2xl font-bold">
                      ${(salesData.total / 1000).toFixed(1)}k
                    </div>
                    <div className="text-green-500 text-sm">
                      +{salesData.percentage}%
                    </div>
                  </div>
                }
              />
            </div>
            <div className="mt-4 space-y-2">
              {salesData.sources.map((source, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-600">{source.name}</span>
                  <span className="font-medium">
                    ${source.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Top Product Card */}
        <Card className="w-full p-4">
          <CardHeader className="flex justify-between">
            <div>
              <p className="text-lg">Top Product</p>
              <p className="text-sm text-gray-500">Top Product in This Month</p>
            </div>
            <button className="text-gray-400">⋮</button>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                    <div>
                      <p className="text-sm font-medium">{product.name}</p>
                      <p className="text-xs text-gray-500">
                        {product.category}
                      </p>
                    </div>
                  </div>
                  <span className="font-medium">${product.price}</span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        {/* Top Category Card */}
        <Card className="w-full p-4">
          <CardHeader className="flex justify-between">
            <div>
              <p className="text-lg">Top Category</p>
              <p className="text-sm text-gray-500">
                Top Category in This Month
              </p>
            </div>
            <button className="text-gray-400">⋮</button>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {categories.map((category, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{category.value}</p>
                    <p
                      className={`text-xs ${
                        category.change >= 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {category.change >= 0 ? "+" : ""}
                      {category.change}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* Recent Orders Table */}
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="xl:col-span-2 lg:col-span-1 md:col-span-1 cursor-pointer shadow hover:shadow-lg">
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
              <p className="text-sm text-gray-500">Showing 1-8 from 100</p>
              <Pagination total={20} boundaries={0} initialPage={1} />
            </div>
          </CardBody>
        </Card>

        <Card className="xl:col-span-1 lg:col-span-1 md:col-span-1 cursor-pointer shadow-md hover:shadow-lg p-4">
          <CardHeader className="flex justify-between">
            <div>
              <h4 className="text-lg font-medium">Customer Growth</h4>
              <p className="text-sm text-gray-500">Based on Country</p>
            </div>
            <button className="text-gray-400">⋮</button>
          </CardHeader>
          <CardBody>
            <div className="mb-6">
              <div className="relative w-full h-48 bg-gray-100 rounded-lg">
                {/* Map placeholder */}
                <Image
                  src={"/assets/map.svg"}
                  alt={""}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            <div className="space-y-4">
              {customers.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">
                        {item.country}
                      </span>
                      <span className="text-sm">{item.growth}%</span>
                    </div>
                    <div className="relative w-full h-2 bg-gray-100 rounded-full">
                      <div
                        className="absolute h-full bg-blue-500 rounded-full"
                        style={{ width: `${item.growth}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {item.customers.toLocaleString()} Customers
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
