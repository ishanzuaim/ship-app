import React from "react";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "@/components/Layout";
import Head from "next/head";
import getData from "@/utils/data";
import Product from "@/components/Product";
import { ProductGroup } from "@/utils/types";

type Props = {
  productGroup: ProductGroup;
};
function Products({ productGroup }: Props) {
  const { id, name, products } = productGroup;
  return (
    <Layout id={id}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className="grid grid-cols-repeat4 gap-4">
        {products?.map((product, key) => {
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
  const response = await fetch("http://localhost:3000/api/items");
  let data = [];
  try {
    data = await response.json();
  } catch (e) {
    console.log(e);
  }
  return {
    props: {
      productGroup: data.find((d: ProductGroup) => d.id === +id) ?? {},
    },
  };
};
export default Products;
