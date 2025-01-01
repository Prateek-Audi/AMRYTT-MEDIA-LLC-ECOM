import React from "react";

type ProductLayoutProps = {
  children: React.ReactNode;
};

const ProductLayout = ({ children }: ProductLayoutProps) => {
  return <main className="overflow-y-auto w-full h-full">{children}</main>;
};

export default ProductLayout;
