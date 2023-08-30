import { FC } from "react";
import styles from "./DesktopHeader.module.scss";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "../mocks";
import { Navigation } from "./Navigation";

export const DesktopHeader: FC = () => {
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

      <div className={styles.menu__container}>
        <Navigation navLinks={navLinks} />
      </div>
    </header>
  );
};
