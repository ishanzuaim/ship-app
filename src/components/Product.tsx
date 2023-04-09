import React from "react";
import Image from "next/image";
type Props = {
  description: string;
  image: string;
  id: number;
};
function Product({ description, image, id }: Props) {
  return (
    <div>
      <Image
        className="border-[1px] border-black w-[400px]"
        alt=""
        src={`https://picsum.photos/id/${id}/400`}
        width={200}
        height={200}
      />
      <div className="p-2">{description}</div>
    </div>
  );
}

export default Product;
