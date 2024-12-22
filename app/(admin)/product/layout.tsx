import React from "react";
import Breadcrumb from "@/components/BreadCrumb";

type ProductLayoutProps = {
  children: React.ReactNode;
};

const ProductLayout = ({ children }: ProductLayoutProps) => {
  return (
    <main className="flex flex-col w-full h-full">
      <Breadcrumb />
      <div className="w-full h-full">{children}</div>
    </main>
  );
};

export default ProductLayout;
