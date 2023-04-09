import React from "react";
import Heading from "./Heading";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
  id: number;
};
function Layout({ children, id }: Props) {
  return (
    <>
      <Heading />
      <Navbar id={id} />
      <div className="py-10 px-40">{children}</div>
    </>
  );
}

export default Layout;
