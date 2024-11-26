"use client";

import Image from "next/image";
import styles from "./sotd.module.css";
import { ChevronRight } from "../../components";

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
      <ChevronRight />
    </div>
  ));
}
