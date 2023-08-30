import { FC } from "react";
import styles from "../DesktopHeader.module.scss";
import Link from "next/link";
import { Props } from "./types";

export const Navigation: FC<Props> = ({ navLinks }) => {
  return (
    <nav className={styles.menu__nav}>
      <ul className={styles.menu__list}>
        {navLinks.map((link) => (
          <li className={styles.menu__item} key={link.text}>
            <Link href={link.link} className={styles.menu__link}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
