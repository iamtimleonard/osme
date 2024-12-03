"use client";

import styles from "./sotd.module.css";
import ScentList from "./ScentList";
import { useContext, useState } from "react";
import { ScentContext } from "../providers";
import {
  ArrowLeft,
  MagnifyingGlass,
  PreferenceHorizontalIcon,
} from "../../components";

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
      <img src={image} alt={name} className={styles.bottleImage} />
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
        <h2 className={styles.header}>Select your scent of the day</h2>
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
            <ScentList list={scents.scentOfTheDay} handler={setScentChoice} />
          </>
        )}
      </div>
    </main>
  );
}
