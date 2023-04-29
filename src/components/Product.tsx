import React from "react";
import Image from "next/image";
import { AiOutlinePlusCircle } from "react-icons/ai";
import useSWR from "swr";
type Props = {
  description: string;
  image: string;
  id: number;
};
function Product({ description, image, id }: Props) {
  const { data, mutate } = useSWR("/api/cart");
  const addToCart = () => {
    fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ id }),
    });
    mutate([...data, id]);
  };

  return (
    <div className="flex flex-col justify-between items-center border-[1px] border-black w-64">
      <Image
        alt=""
        src={`https://picsum.photos/id/${id}/400`}
        width={200}
        height={200}
      />
      <div className="p-2 text-center">{description}</div>
      <div className="self-end p-1 cursor-pointer" onClick={addToCart}>
        <AiOutlinePlusCircle size={25} />
      </div>
    </div>
  );
}

export default Product;
