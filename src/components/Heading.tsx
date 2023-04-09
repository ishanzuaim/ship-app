import React from "react";
import Image from "next/image";
import Link from "next/link";

function Heading() {
  return (
    <div className="flex px-10 py-2 justify-between">
      <div className="flex">
        <Link href="/">
          <Image alt="Logo" src="/whiztec.jpg" width={130} height={130} />
        </Link>
      </div>
      <div className="flex text-[13px] items-center gap-4">
        <div>Bag(3)</div>
        <div>US($)</div>
        <div>English</div>
      </div>
    </div>
  );
}

export default Heading;
