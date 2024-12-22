import { NextPage } from "next";

type Props = {
  params: {
    productId: number;
  };
};

const Page: NextPage<Props> = ({ params }) => {
  return <>{params.productId}:- Product Edit</>;
};

export default Page;
