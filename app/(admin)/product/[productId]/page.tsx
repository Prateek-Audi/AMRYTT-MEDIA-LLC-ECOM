import EditProduct from "@/components/Product/EditProduct";
import { NextPage } from "next";

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
