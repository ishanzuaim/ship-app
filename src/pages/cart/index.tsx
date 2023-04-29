import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

function Cart() {
  return (
    <Layout id={0}>
      <Head>
        <title>Cart</title>
      </Head>
      <div className="grid grid-cols-repeat4 gap-4"></div>
    </Layout>
  );
}

export default Cart;
