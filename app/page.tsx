"use client";

import styles from "./home.module.css";
import ScentRow from "./ScentRow";
import Link from "next/link";
import { useContext } from "react";
import { ScentContext } from "./providers";

export default function () {
  const scents = useContext(ScentContext);
  console.log(scents);
  return (
    <>
      <main className={styles.container}>
        <div className={styles.width}>
          <h4 className={styles.welcome}>Hello, Chelsea.</h4>
          <ScentRow
            title="Your scent library"
            items={scents.library}
            link="/library"
          >
            <Link href="/search" className={styles.primaryButton}>
              + Add new
            </Link>
          </ScentRow>
          <ScentRow
            title="Recently worn"
            items={scents.scentOfTheDay}
            link="/sotd"
          >
            <Link href="/search" className={styles.primaryButton}>
              + Add new
            </Link>
          </ScentRow>
          <ScentRow title="Wish list" items={scents.wishlist} link="/wishlist">
            <Link href="/search" className={styles.primaryButton}>
              + Add new
            </Link>
          </ScentRow>
        </div>
      </main>
    </>
  );
}
