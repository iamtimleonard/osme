"use client";

import styles from "./home.module.css";
import ScentRow from "./ScentRow";
import Link from "next/link";
import { useContext } from "react";
import { ScentContext } from "./providers";

export default function () {
  const scents = useContext(ScentContext);
  const mostWorn = Object.entries(
    scents.scentOfTheDay.reduce((res, curr) => {
      res[curr.name] ? res[curr.name]++ : (res[curr.name] = 1);
      return res;
    }, {})
  ).sort(
    ([nameA, countA]: [string, number], [nameB, countB]: [string, number]) =>
      countB - countA
  );
  console.log({ mostWorn });
  return (
    <>
      <main className={styles.container}>
        <div className={styles.width}>
          <h4 className={styles.welcome}>Hello, Chelsea.</h4>
          <div>
            <h4>You have {scents.library.length} scents in your library.</h4>
          </div>
          <div>
            <h4>
              Your top 3 most worn scents:{" "}
              {mostWorn
                .slice(0, 3)
                .map(([name, count]) => name)
                .join(", ")}
            </h4>
          </div>
          <h4>You have {scents.wishlist.length} scents in your wish list</h4>
        </div>
      </main>
    </>
  );
}
