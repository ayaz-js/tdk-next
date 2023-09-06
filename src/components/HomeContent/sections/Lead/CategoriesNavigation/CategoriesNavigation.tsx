import { FC } from "react";
import Link from "next/link";
import styles from "./CategoriesNavigation.module.scss";
import { categoriesLink } from "./mocks";

export const CategoriesNavigation: FC = () => {
  return (
    <div className={styles.block}>
      <ul className={styles.block__list}>
        {categoriesLink.map((item) => (
          <li className={styles.block__item} key={item.text}>
            <Link href={item.link} className={styles.block__link}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
