import { FC } from "react";
import styles from "./AboutUs.module.scss";
import { data } from "./mocks";

export const AboutUs: FC = () => {
  return (
    <section className={styles.block} id="about-us">
      <h2 className={styles.block__title}>
        ТОО TDK Commerce SA занимается продажей товаров производства Китай,
        Европа США, СНГ:
      </h2>

      <ul className={styles.block__list}>
        {data.map((item) => (
          <li className={styles.block__item} key={item.text}>
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
};
