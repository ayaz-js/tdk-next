import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

interface Props {
  image: string;
  name: string;
  href: string;
}

const SubcategoryCard: FC<Props> = ({ image, name, href }) => {
  return (
    <Link href={href}>
      <div className="card w-full bg-[#232323] shadow-xl hover:bg-[#303030] [&>figure>img]:hover:scale-[103%] [&>figure>img]:transition [&>figure>img]:duration-200">
        <figure className="rounded-2xl">
          <Image
            src={image}
            alt={`Изображение ${name}`}
            width={580}
            height={282}
          />
        </figure>
        <div className="card-body gap-[24px] justify-between pb-[40px]">
          <h2 className="text-center text-white text-[26px]">{name}</h2>
          <div className="card-actions justify-center">
            <Button>Перейти к продуктам</Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SubcategoryCard;
