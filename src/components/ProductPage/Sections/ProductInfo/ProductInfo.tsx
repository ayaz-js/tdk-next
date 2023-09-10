import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { productImages } from "@/components/ProductPage/mocks";
import Image from "next/image";

export const ProductInfo: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="grid grid-cols-2 gap-16 mt-8">
      <div className="w-full">
        <Swiper
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
        >
          {productImages.map((item, index) => (
            <SwiperSlide className="rounded-2xl" key={index}>
              <Image
                className="w-full"
                src={item.image}
                width={830}
                height={514}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          // @ts-ignore
          onSwiper={setThumbsSwiper}
          spaceBetween={2}
          slidesPerView={6}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="!pt-6 !m-auto"
        >
          {productImages.map((item, index) => (
            <SwiperSlide className="rounded-lg" key={index}>
              <Image
                className="p-0 m-auto w-full h-full"
                src={item.image}
                width={136}
                height={84}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full">
        <p className="text-2xl opacity-50">Холодные фрезы</p>
        <h1 className="text-5xl font-bold mt-3">4200 SMi Hartgestein</h1>
        <div className="divider"></div>
        <ul>
          <li className="text-xl font-normal mt-4">
            Ширина срезания макс. {"- "}
            <span className="text-xl font-semibold">4200 мм</span>
          </li>
          <li className="text-xl font-normal mt-4">
            Ширина срезания макс. {"- "}
            <span className="text-xl font-semibold">4200 мм</span>
          </li>
          <li className="text-xl font-normal mt-4">
            Ширина срезания макс. {"- "}
            <span className="text-xl font-semibold">4200 мм</span>
          </li>
        </ul>
        <p className="text-xl font-normal mt-8">
          Установки данного типа впечатляют высокой долей асфальтогранулята,
          равной более 90%, при одновременном соблюдении пределов нормы
          выбросов.
        </p>
      </div>
    </section>
  );
};