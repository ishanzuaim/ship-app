import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";
import getData from "@/utils/data";
type Props = {
  id: number;
};
function Navbar({ id }: Props) {
  return (
    <div className="flex border-t-[1px] border-b-[1px] border-gray-300 text-sm px-10 py-[1px] justify-between">
      <div className="flex gap-3">
        {getData().map((val, key) => {
          return <NavItem {...val} key={key} active={id === val.id} />;
        })}
      </div>
      <div className="flex gap-3">
        <div className="border-[1px] p-1 border-black border-opacity-0 hover:border-opacity-100">
          SEARCH
        </div>
      </div>
    </div>
  );
}

export default Navbar;
