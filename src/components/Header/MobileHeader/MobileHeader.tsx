import { FC, useState } from "react";
import styles from "./MobileHeader.module.scss";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../mocks";
import { Navigation } from "./Navigation";

export const MobileHeader: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);

  const closeMenu = () => setIsOpen(false);

  const addOpenedClass = !isOpen
    ? `${styles.menu__container}`
    : `${styles.menu__container} ${styles.menu__container_opened}`;

  return (
    <header className={styles.menu}>
      <Link href="/" className={styles.menu__link}>
        <Image
          width={440}
          height={60}
          src="/images/logo.svg"
          alt="Логтип: ТОО TDK Commerce SA"
          className={styles.menu__logo}
        />
      </Link>

      <button
        onClick={openMenu}
        type="button"
        className={styles.menu__mobile}
      ></button>

      {isOpen && (
        <div className={addOpenedClass}>
          <div onClick={closeMenu} className={styles.menu__overlay}></div>
          <Navigation closeMenu={closeMenu} navLinks={navLinks} />
        </div>
      )}
    </header>
  );
};
