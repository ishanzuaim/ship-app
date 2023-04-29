import React from "react";
import Heading from "./Heading";
import Navbar from "./Navbar";
import useSWR from "swr";
type Props = {
  children: React.ReactNode;
  id: number;
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function Layout({ children, id }: Props) {
  const { data: cart } = useSWR("/api/cart", fetcher);
  return (
    <>
      <Heading cart={cart} />
      <Navbar id={id} />
      <div className="py-10 px-40">{children}</div>
    </>
  );
}

export default Layout;
