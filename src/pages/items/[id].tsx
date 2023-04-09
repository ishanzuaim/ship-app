import React from "react";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "@/components/Layout";
import Head from "next/head";
import getData from "@/utils/data";
import Product from "@/components/Product";

interface Product {
  image: string;
  description: string;
}

interface ItemData {
  id: number;
  name: string;
  products: Array<Product>;
}
type Props = {
  itemData: ItemData;
};
function Products({ itemData }: Props) {
  const { id, name, products } = itemData;
  return (
    <Layout id={id}>
      <Head>
        <title>{name}</title>
      </Head>
      <div>{name}</div>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product, key) => {
          return <Product {...product} key={key} />;
        })}
      </div>
    </Layout>
  );
}

interface Params extends ParsedUrlQuery {
  id: string;
}

export async function getStaticPaths() {
  const paths = getData().map((item) => ({
    params: { id: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;
  const itemData = getData().find((i) => i.id == +id);
  return {
    props: { itemData },
  };
};
export default Products;
