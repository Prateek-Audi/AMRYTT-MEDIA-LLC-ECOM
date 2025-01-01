import { NextPage } from "next";
import EditProduct from "@/components/Product/EditProduct";

type Props = {
  params: {
    productId: number;
  };
};

const Page: NextPage<Props> = ({ params }) => {
  return (
    <>
      <EditProduct id={params.productId} />
    </>
  );
};

export default Page;
