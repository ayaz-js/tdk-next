import { FC } from "react";
import styles from "./OurService.module.scss";
import { data } from "./mocks";
import Image from "next/image";

export const OurService: FC = () => {
  return (
    <section className={styles.block} id="our-service">
      <h2 className={styles.block__title}>Наши услуги:</h2>

      <div className={styles.block__items}>
        {data.map((item) => (
          <article className={styles.block__item} key={item.image}>
            <Image
              src={item.image}
              alt={item.heading}
              className={styles.block__image}
              width={836}
              height={492}
            />
            <div className={styles.block__textContainer}>
              <h3 className={styles.block__heading}>{item.heading}</h3>
              <p className={styles.block__text}>{item.text}</p>

              {item.list && (
                <ul className={styles.block__list}>
                  {item.list.map((item) => (
                    <li className={styles.block__listItem} key={item.text}>
                      {item.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
