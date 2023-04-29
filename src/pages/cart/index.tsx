import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

type Props = {
  items: Array<number>;
};

function Cart({ items }: Props) {
  return (
    <Layout id={0}>
      <Head>
        <title>Cart</title>
      </Head>
      <div className="grid grid-cols-repeat4 gap-4">{items}</div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const carts = await fetch("http://localhost:3000/api/cart");
  const items = await carts.json();
  // Pass data to the page via props
  return { props: { items } };
}

export default Cart;
