"use client";

import styles from "./wishlist.module.css";
import ScentList from "./ScentList";
import { useContext, useState } from "react";
import { ScentContext } from "../providers";
import {
  ArrowLeft,
  MagnifyingGlass,
  PreferenceHorizontalIcon,
} from "../../components";
import Image from "next/image";

const PerfumeView = ({
  id,
  name,
  house,
  topNotes,
  heartNotes,
  baseNotes,
  image,
  setScentChoice,
}) => {
  return (
    <div className={styles.width}>
      <ArrowLeft setScentChoice={setScentChoice} /> <p>Scent Details</p>
      <h3>{name}</h3>
      <p>{house}</p>
      <Image src={image} alt={name} width={300} />
      <p>Top notes: {topNotes.join(", ")}</p>
      <p>Heart notes: {heartNotes.join(", ")}</p>
      <p>Base notes: {baseNotes.join(", ")}</p>
    </div>
  );
};

export default function () {
  const scents = useContext(ScentContext);
  const [scentChoice, setScentChoice] = useState(null);
  return (
    <main className={styles.container}>
      <div className={styles.width}>
        <h2 className={styles.header}>Your wishlist</h2>
        {scentChoice ? (
          <PerfumeView
            id={scentChoice.id}
            name={scentChoice.name}
            house={scentChoice.house}
            topNotes={scentChoice.topNotes}
            heartNotes={scentChoice.heartNotes}
            baseNotes={scentChoice.baseNotes}
            image={scentChoice.image}
            setScentChoice={setScentChoice}
          />
        ) : (
          <>
            <div className={styles.searchBar}>
              <label htmlFor="search">Enter name or keyword</label>
              <div className={styles.formControl}>
                <div className={styles.searchIcon}>
                  <MagnifyingGlass />
                  <input type="text" name="search" className={styles.input} />
                </div>
                <PreferenceHorizontalIcon />
              </div>
            </div>
            <div className={styles.library}></div>
            <ScentList list={scents.wishlist} handler={setScentChoice} />
          </>
        )}
      </div>
    </main>
  );
}
