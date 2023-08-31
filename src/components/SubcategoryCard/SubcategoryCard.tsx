import {FC} from "react";
import Image from 'next/image'
import Link from "next/link";

interface Props {
    image:string
    name:string

    href:string
}
const SubcategoryCard:FC<Props> = ({image,name,href}) => {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><Image src={image} alt={`Изображение ${name}`} width={580} height={282}/></figure>
            <div className="card-body gap-[24px] justify-between pb-[40px]">
                <h2 className="text-center text-white text-[26px]">{name}</h2>
                <div className="card-actions justify-center">
                    <Link href={href}>
                        <button className="btn btn-primary hover:bg-white hover:border-white">Перейти к продуктам</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SubcategoryCard;