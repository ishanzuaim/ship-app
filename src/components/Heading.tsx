import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
type Props = {
  cart: Array<Number>;
};
function Heading({ cart }: Props) {
  return (
    <div className="flex px-10 py-2 justify-between">
      <div className="flex">
        <Link href="/">
          <Image alt="Logo" src="/whiztec.jpg" width={130} height={130} />
        </Link>
      </div>
      <div className="flex text-[13px] items-center gap-4">
        <Link href="/cart">
          <div className="flex">
            <IoCartOutline size={25} />
            {cart?.length}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Heading;
