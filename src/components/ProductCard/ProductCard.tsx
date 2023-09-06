import React, { FC } from "react";
import Image from "next/image";
import Button from "@/components/Button";

interface Props {
  title: string;
  specifications: string[];
  image: string;
}

const ProductCard: FC<Props> = ({ title, image, specifications }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="bg-white rounded-t-[16px]">
        <Image
          src={image}
          alt={`Изображение товара ${title}`}
          height={278}
          width={428}
        />
      </figure>
      <div className="card-body bg-brand-black gap-[24px] pt-[32px] pb-[40px] rounded-b-[16px]">
        <h2 className="card-title text-white text-[26px] font-bold w-full">
          {title}
        </h2>
        <ul className="list-disc marker:text-brand-yellow">
          {specifications.map((spec, index) => (
            <li
              className="ml-4 mb-[16px] text-[18px] last:mb-0"
              key={index}
              dangerouslySetInnerHTML={{ __html: spec }}
            />
          ))}
        </ul>
        <div className="card-actions">
          <Button className="w-full">Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
