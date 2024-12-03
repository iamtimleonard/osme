"use client";

import styles from "./home.module.css";
import { useContext, useEffect, useState } from "react";
import { ScentContext, ScentReducerContext } from "./providers";

export default function () {
  const dispatch = useContext(ScentReducerContext);
  const [isLoading, setIsLoading] = useState(false);
  const scents = useContext(ScentContext);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/user/1`)
      .then((res) => res.json())
      .then((payload) => {
        dispatch({
          type: "init",
          payload,
        });
        setIsLoading(true);
      });
  }, []);

  if (!isLoading) return <h1>Loading...</h1>;

  const mostWorn = Object.entries(
    scents.scentOfTheDay.reduce((res, curr) => {
      res[curr.name] ? res[curr.name]++ : (res[curr.name] = 1);
      return res;
    }, {})
  ).sort(
    ([nameA, countA]: [string, number], [nameB, countB]: [string, number]) =>
      countB - countA
  );

  const pluralize = (str: string, count: number) =>
    count === 1 ? str : `${str}s`;

  return (
    <>
      <main className={styles.container}>
        <div className={styles.width}>
          <h4 className={styles.welcome}>Hello, Chelsea.</h4>
          <div>
            <h4>
              You have {scents.library.length}{" "}
              {pluralize("scent", scents.library.length)} in your library.
            </h4>
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
