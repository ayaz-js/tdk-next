import { FC } from "react";
import styles from "../MobileHeader.module.scss";
import Link from "next/link";
import { Props } from "./types";

export const Navigation: FC<Props> = ({ navLinks, closeMenu }) => {
  return (
    <nav className={styles.menu__nav}>
      <ul className={styles.menu__list}>
        {navLinks.map((link) => (
          <li className={styles.menu__item} key={link.text}>
            <Link
              onClick={closeMenu}
              href={link.link}
              className={styles.menu__link}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <p className={styles.menu__text}>ТОО «TDK Commerce SA»</p>
    </nav>
  );
};
