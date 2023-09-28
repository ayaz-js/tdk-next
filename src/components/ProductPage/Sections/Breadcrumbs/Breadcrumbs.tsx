import { FC } from "react";
import Link from "next/link";

export const Breadcrumbs: FC = () => {
  return (
    <section className="mt-10">
      <Link
        href="#"
        className="flex items-center gap-x-4 before:w-4 before:h-4 before:bg-no-repeat before:bg-[url('/images/arrow-left.svg')] link link-warning text-xl no-underline font-bold max-[1024px]:text-sm"
      >
        Назад к продуктам
      </Link>
    </section>
  );
};
