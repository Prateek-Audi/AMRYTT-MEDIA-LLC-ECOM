import React from "react";
import Image from "next/image";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { customers } from "../data";

const CustomerGrowthCard = () => {
  return (
    <Card className="xl:col-span-1 lg:col-span-1 md:col-span-1 cursor-pointer shadow-none hover:shadow-lg">
      <CardHeader className="flex justify-between items-start px-6 pt-6 pb-2">
        <div>
          <h3 className="text-lg font-medium text-gray-900">Customer Growth</h3>
          <p className="text-sm text-gray-500 mt-0.5">Based on Country</p>
        </div>
        <button className="text-gray-400 text-xl leading-none">⋮</button>
      </CardHeader>
      <CardBody className="px-6 pb-6">
        <div className="relative w-full h-48 mb-6">
          <div className="absolute inset-0">
            <Image
              src="/assets/map.svg"
              alt="World Map"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="space-y-4">
          {customers.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gray-100 rounded-full"></div>
              <div className="flex-grow">
                <span className="text-sm font-medium text-gray-900">
                  {item.country}
                </span>
                <div className="text-xs text-gray-500">
                  {item.customers.toLocaleString()} Customers
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${item.growth}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-12">
                  {item.growth}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default CustomerGrowthCard;
