import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CircularProgress,
} from "@nextui-org/react";
import Image from "next/image";
import { revenueData, salesData } from "../data";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "style.module.css";

const ChartsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Target Chart - Smaller Card */}
      <Card className="col-span-1 cursor-pointer shadow-none hover:shadow-lg p-4">
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
            <div className="relative flex justify-evenly items-center">
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
                        {(salesData.total / 1000).toFixed(2)}%
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
            <p className="absolute bottom-24 text-center text-sm font-normal text-[#667085]">
              You succeed earn
              <span className="text-[#1D1F2C]"> $240</span> today, its
              higher than yesterday
            </p>

            {/* Statistics */}
            <div className="absolute bottom-8 flex justify-evenly w-full mt-4 text-center">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium text-[#667085]">Target</p>
                <div className="flex items-center gap-1">
                  <p className="text-xl font-semibold text-[#1D1F2C]">$20k</p>
                  <Image
                    src={"assets/down-arrow.svg"}
                    alt=""
                    width={12}
                    height={12}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium text-[#667085]">Revenue</p>
                <div className="flex items-center gap-1">
                  <p className="text-xl font-semibold text-[#1D1F2C]">$20k</p>
                  <Image
                    src={"assets/up-arrow.svg"}
                    alt=""
                    width={12}
                    height={12}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium text-[#667085]">Today</p>
                <div className="flex items-center gap-1">
                  <p className="text-xl font-semibold text-[#1D1F2C]">$20k</p>
                  <Image
                    src={"assets/up-arrow.svg"}
                    alt=""
                    width={12}
                    height={12}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Revenue Chart - Larger Card */}
      <Card className="col-span-1 lg:col-span-2 cursor-pointer shadow-none hover:shadow-lg">
        <CardHeader className="p-6 flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">Statistic</h3>
            <p className="text-sm text-gray-500">Revenue and Sales</p>
          </div>
          <div className="flex items-end h-full gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#2086BF]" />
              <span className="text-sm text-gray-600">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#F86624]" />
              <span className="text-sm text-gray-600">Sales</span>
            </div>
          </div>
        </CardHeader>

        <CardBody>
          <ResponsiveContainer width="99%" height={300}>
            <LineChart data={revenueData}>
              {/* Grid */}
              <CartesianGrid strokeDasharray="4 4" vertical={false} />

              {/* Axes */}
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#888", fontSize: 12 }}
                interval={1}
              />
              <YAxis
                tickFormatter={(value) =>
                  value >= 1000 ? `$${value / 1000}k` : `$${value}`
                }
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#888", fontSize: 12 }}
                domain={[0, 1200]}
                ticks={[0, 200, 400, 600, 800, 1000, 1200]}
              />

              {/* Tooltip */}
              <Tooltip
                formatter={(value, name) => {
                  if (name === "sales") {
                    return [`${value}%`, "Sales"];
                  }
                  return [`$${value.toLocaleString()}`, "Revenue"];
                }}
                contentStyle={{
                  backgroundColor: "#333",
                  borderRadius: "8px",
                  color: "#fff",
                  padding: "10px",
                  border: "none",
                }}
                labelFormatter={() => ""}
                itemStyle={{ color: "#fff" }}
                cursor={{ strokeDasharray: "3 3", stroke: "#2086BF" }}
              />

              {/* Lines */}
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#2086BF"
                strokeWidth={2.5}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#F86624"
                strokeWidth={2.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardBody>
      </Card>
    </div>
  );
};

export default ChartsSection;
