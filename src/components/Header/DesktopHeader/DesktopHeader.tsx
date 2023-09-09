import { FC } from "react";
import styles from "./DesktopHeader.module.scss";
import { navLinks } from "../mocks";
import { Navigation } from "./Navigation";
import { Logo } from "../Logo";

export const DesktopHeader: FC = () => {
  return (
    <header className={styles.menu}>
      <Logo />
      <div className={styles.menu__container}>
        <Navigation navLinks={navLinks} />
      </div>
    </header>
  );
};
