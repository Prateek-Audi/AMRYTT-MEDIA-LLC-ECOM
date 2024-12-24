import { NextPage } from "next";
import ProductTable from "@/components/Product";

const Page: NextPage = () => {
  return (
    <main className="px-4">
      <ProductTable />
    </main>
  );
};

export default Page;
