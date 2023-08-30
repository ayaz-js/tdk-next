import { FC } from "react"
import Image from "next/image"
import styles from "./Gallery.module.scss"

export const Gallery: FC = () => {
    return (
        <section className={styles.block}>
            <Image
                width={1344}
                height={545}
                src="/images/lead-bg.png"
                alt=""
                className={styles.block__image}
            />
        </section>
    );
};
