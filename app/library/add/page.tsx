"use client";

import { useState } from "react";
import { Search01Icon } from "../page";
import styles from "./libary-add.module.css";
import ScentList from "../ScentList";
import bottle1 from "../../../public/bottle1.jpg";
import bottle2 from "../../../public/bottle2.jpg";
import bottle3 from "../../../public/bottle3.jpg";
import bottle4 from "../../../public/bottle4.jpg";
import bottle5 from "../../../public/bottle5.webp";
import Link from "next/link";

const LIBRARY = [
  {
    image: bottle1,
    name: "Chance",
    house: "Chanel",
  },
  {
    image: bottle2,
    name: "Debaser",
    house: "D.S. & Durga",
  },
  {
    image: bottle3,
    name: "Little Flower",
    house: "Regime des Fleurs",
  },
  {
    image: bottle4,
    name: "Hwyl",
    house: "Aesop",
  },
  {
    image: bottle5,
    name: "Chance",
    house: "Chanel",
  },
];

const X = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="4"
      y1="4"
      x2="20"
      y2="20"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="20"
      y1="4"
      x2="4"
      y2="20"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ListSearch = () => {
  const [hasInput, setHasInput] = useState(false);
  return (
    <>
      <Link href="/library">
        <X />
      </Link>
      <p>Select a scent to add to your library</p>
      <div className={styles.searchBar}>
        <label htmlFor="search">Enter name or keyword</label>
        <div className={styles.formControl}>
          <div className={styles.searchIcon}>
            <Search01Icon />
            <input
              type="text"
              name="search"
              className={styles.input}
              onChange={(event) => {
                setHasInput(event.target.value.length > 0);
              }}
            />
          </div>
        </div>
        {hasInput && <ScentList list={LIBRARY} />}
      </div>
    </>
  );
};

export default function () {
  return (
    <main className={styles.container}>
      <ListSearch />
    </main>
  );
}
