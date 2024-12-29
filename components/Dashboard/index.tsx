"use client";

import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import Image from "next/image";
import { customers } from "./data";
import DashHeader from "./DashHeader";
import StateCards from "./StateCards";
import ChartsSection from "./ChartsSection";
import SalesSection from "./SalesSection";
import RecentOrders from "./RecentOrders";

const DashboardPage: React.FC = () => {
  return (
    <div className="px-6 pb-2 space-y-6">
      {/* Header */}
      <DashHeader />

      {/* Stats Cards */}
      <StateCards />

      {/* Charts Section */}
      <ChartsSection />

      {/* Sales Source, Top Product, Top Category */}
      <SalesSection />

      {/* Recent Orders Table */}
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 gap-6">
        <RecentOrders />

        <Card className="xl:col-span-1 lg:col-span-1 md:col-span-1 cursor-pointer shadow-none hover:shadow-lg p-4">
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
                    objectFit: "contain",
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
