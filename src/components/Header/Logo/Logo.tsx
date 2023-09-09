import React from "react";
import Link from "next/link";
import styles from "./Logo.module.scss";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" className={styles.block}>
      <Image
        width={440}
        height={60}
        src="/images/logo.svg"
        alt="Логтип: ТОО TDK Commerce SA"
        className={styles.block__logo}
      />
    </Link>
  );
};
