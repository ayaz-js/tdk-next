import { FC } from "react";
import styles from "./MobileHeader.module.scss";
import { Drawer } from "./Drawer";
import { Logo } from "../Logo";

export const MobileHeader: FC = () => {
  return (
    <header className={styles.menu}>
      <Logo />
      <Drawer />
    </header>
  );
};
