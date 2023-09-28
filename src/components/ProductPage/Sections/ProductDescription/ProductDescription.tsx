import { FC, useState } from "react";
import { productAttribute } from "@/components/ProductPage/mocks";

export const ProductDescription: FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Описание", "Технические характеристики"];

  const toggleTab = (index: number) => setActiveTab(index);

  return (
    <section className="tabs mt-16 max-[1024px]:mt-8">
      <div className="w-full">
        {tabs.map((tab, index) => (
          <a
            key={index}
            className={`tab tab-lg tab-lifted text-[26px] !bg-[#232323] font-bold max-[1024px]:text-base max-[820px]:text-xs ${
              activeTab === index ? "tab-active text-[#ffbb0d]" : ""
            }`}
            onClick={() => toggleTab(index)}
          >
            {tab}
          </a>
        ))}
      </div>
      <div className="bg-[#232323] border-b border-r border-l border-[#000] rounded-tr-lg rounded-br-lg rounded-bl-lg pt-14 pb-16 px-32 w-full max-[1024px]:px-8 max-[1024px]:py-6">
        {activeTab === 0 && (
          <>
            <p className="text-[26px] font-bold max-[1024px]:text-base">
              Чистая мощность. BA-RPP 5000
            </p>
            <p className="text-xl font-normal mt-4 max-[1024px]:text-base">
              Установки данного типа впечатляют высокой долей асфальтогранулята,
              равной более 90%, при одновременном соблюдении пределов нормы
              выбросов.
            </p>
            <p className="text-[26px] font-bold mt-10 max-[1024px]:text-base">
              Чистая мощность. BA-RPP 5000
            </p>
            <p className="text-xl font-normal mt-4 max-[1024px]:text-base">
              Установки данного типа впечатляют высокой долей асфальтогранулята,
              равной более 90%, при одновременном соблюдении пределов нормы
              выбросов.
            </p>
          </>
        )}
        {activeTab === 1 && (
          <>
            {productAttribute.map((item) => (
              <>
                <div className="flex justify-between max-w-[1178px] w-full">
                  <p className="text-xl font-normal max-[1024px]:text-sm">
                    {item.name}
                  </p>
                  <p className="text-xl font-bold text-[#fff] max-[1024px]:text-base">
                    {item.value}
                  </p>
                </div>
                <div className="divider max-w-[1178px] w-full"></div>
              </>
            ))}
          </>
        )}
      </div>
    </section>
  );
};
