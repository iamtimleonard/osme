import Link from "next/link";
import styles from "./home.module.css";
import Image from "next/image";

type Item = {
  src: any;
  alt: string;
};

export default function ({
  items,
  title,
  link,
}: {
  items: Item[];
  title: string;
  link: string;
}) {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listHeader}>
        <h3 className={styles.rowTitle}>{title}</h3>
        <Link href={link}>See all</Link>
      </div>
      <ol className={styles.itemList}>
        {items.map(({ src, alt }) => (
          <li className={styles.listItem} key={alt}>
            <Image
              alt={alt}
              src={src}
              height={200}
              style={{ borderRadius: "15px" }}
            />
          </li>
        ))}
      </ol>
      <button className={styles.primaryButton}>+ Add new</button>
    </div>
  );
}
