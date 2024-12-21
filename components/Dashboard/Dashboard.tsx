'use client'

import { Card, CardHeader, CardBody, Tabs, Tab } from "@nextui-org/react";
import { useState } from "react";

const DashboardPage: React.FC = () => {

  return (
    <div className="flex-col md:flex">
      <div
        className="flex-1 space-y-4 overflow-y-auto custom-scrollbar p-6 pt-6"
        style={{ maxHeight: "calc(100vh - 100px)" }}
      >
        <Tabs aria-label="Dashboard Tabs" color="default" variant="solid">
          <Tab title="Overview">
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { title: "Total Revenue", value: "$45,231.89", change: "+20.1% from last month" },
                  { title: "Subscriptions", value: "+2350", change: "+180.1% from last month" },
                  { title: "Sales", value: "+12,234", change: "+19% from last month" },
                  { title: "Active Now", value: "+573", change: "+201 since last hour" },
                ].map((item, index) => (
                  <Card key={index} className="bg-[#318531] text-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <span className="text-sm font-medium">{item.title}</span>
                    </CardHeader>
                    <CardBody>
                      <div className="text-2xl font-bold">{item.value}</div>
                      <p className="text-xs text-muted-foreground">{item.change}</p>
                    </CardBody>
                  </Card>
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <span className="font-bold text-lg">Overview</span>
                  </CardHeader>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <span className="font-bold text-lg">Recent Sales</span>
                  </CardHeader>
                  <CardBody>
                    <p>You made 265 sales this month.</p>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Tab>
          <Tab title="Analytics">
            <p>Analytics Content Here</p>
          </Tab>
          <Tab title="Reports" isDisabled>
            <p>Reports content goes here</p>
          </Tab>
          <Tab title="Notifications" isDisabled>
            <p>Notifications content goes here</p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPage;
