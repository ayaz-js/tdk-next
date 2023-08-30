import { FC } from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { data } from "./mocks";
import Image from "next/image";

export const Footer: FC = () => {
  return (
    <footer className={styles.block} id="contact">
      <h2 className={styles.block__title}>Контакты:</h2>

      <ul className={styles.block__contactList}>
        {data.map((item) => (
          <li className={styles.block__contactItem} key={item.icon}>
            <Image
              width={55}
              height={55}
              alt={item.text}
              src={item.icon}
              className={styles.block__contactIcon}
            />
            {item.link ? (
              <Link href={item.link} className={styles.block__contactLink}>
                {item.text}
              </Link>
            ) : (
              <p className={styles.block__contactText}>{item.text}</p>
            )}
          </li>
        ))}
      </ul>

      <div
        style={{ position: "relative", overflow: "hidden" }}
        className={styles.block__map}
      >
        <Link
          href="https://yandex.kz/maps/162/almaty/?utm_medium=mapframe&utm_source=maps"
          style={{ color: "#eee", fontSize: 12, position: "absolute", top: 0 }}
        >
          Алматы
        </Link>

        <Link
          href="https://yandex.kz/maps/162/almaty/house/Y08YfwNjQEYPQFppfX51dnhjbA==/?ll=76.943979%2C43.247306&utm_medium=mapframe&utm_source=maps&z=20.01"
          style={{ color: "#eee", fontSize: 12, position: "absolute", top: 14 }}
        >
          Улица Байсеитовой, 11/13 — Яндекс Карты
        </Link>

        <iframe
          src="https://yandex.kz/map-widget/v1/-/CCUZBVrBsC"
          width="100%"
          height="400"
          frameBorder={1}
          allowFullScreen={true}
          style={{ position: "relative" }}
          className={styles.block__iframe}
        ></iframe>
      </div>
    </footer>
  );
};
