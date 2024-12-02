import Link from "next/link";
import styles from "./home.module.css";
import Image from "next/image";
import { PropsWithChildren } from "react";

type Item = {
  image: string;
  alt: string;
};

type Props = PropsWithChildren<{
  items: Item[];
  title: string;
  link: string;
}>;

export default function ({ items, title, link, children }: Props) {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listHeader}>
        <h3 className={styles.rowTitle}>{title}</h3>
        <Link href={link}>See all</Link>
      </div>
      <ol className={styles.itemList}>
        {items.map(({ image, alt }) => (
          <li className={styles.listItem} key={alt}>
            <img
              alt={alt}
              src={image}
              style={{ borderRadius: "15px", height: "200px" }}
            />
          </li>
        ))}
      </ol>
      {children}
    </div>
  );
}
