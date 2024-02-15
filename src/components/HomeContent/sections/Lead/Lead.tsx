import React from "react";
import styles from "./Lead.module.scss";
import { CategoriesNavigation } from "./CategoriesNavigation";

export const Lead = () => {
  return (
    <section className={styles.block}>
      <h1 className={styles.block__title}>
        <span className={styles.block__title_yellow}>Everything</span> you needs
      </h1>

      {/*<CategoriesNavigation />*/}
    </section>
  );
};
