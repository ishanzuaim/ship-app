import Link from "next/link";
import React from "react";

type Props = {
  id: number;
  name: string;
  active: boolean;
};

function NavItem(props: Props) {
  const { id, name, active } = props;
  return (
    <Link
      href={`/items/${id}`}
      className={`border-[1px] p-1 border-black border-opacity-0 hover:border-opacity-100 ${
        active && "border-opacity-100"
      }`}
    >
      {name}
    </Link>
  );
}

export default NavItem;
