"use client";

import Image from "next/image";
import styles from "./search.module.css";

type Props = {
  list: {
    image: any;
    name: string;
    house: string;
  }[];
  handler?: any;
};

export default function ({ list, handler }: Props) {
  return list.map((scent, idx) => (
    <div className={styles.row} key={idx} onClick={() => handler({ ...scent })}>
      <Image
        src={scent.image}
        alt={`${scent.name} by ${scent.house}`}
        height={125}
        className={styles.bottleImage}
      />
      <div className={styles.title}>
        <p>{scent.name}</p>
        <p>{scent.house}</p>
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18l6-6-6-6"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  ));
}
