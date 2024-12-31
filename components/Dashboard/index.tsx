"use client";

import React from "react";
import DashHeader from "./DashHeader";
import StateCards from "./StateCards";
import ChartsSection from "./ChartsSection";
import SalesSection from "./SalesSection";
import RecentOrders from "./RecentOrders";
import GrowthChart from "./GrowthChart";

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
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-1 gap-6">
        <RecentOrders />

        {/* Growth Chart */}
        <GrowthChart />
      </div>
    </div>
  );
};

export default DashboardPage;
