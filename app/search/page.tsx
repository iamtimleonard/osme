"use client";

import { useContext, useEffect, useState } from "react";
import styles from "./search.module.css";
import ScentList from "./ScentList";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MagnifyingGlass } from "../../components";
import { ScentReducerContext } from "../providers";

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
  const dispatch = useContext(ScentReducerContext);

  const libraryAdd = () => {
    dispatch({
      type: "library:add",
      payload: { id, name, house, topNotes, heartNotes, baseNotes, image },
    });
  };

  const wishlistAdd = () => {
    dispatch({
      type: "wishlist:add",
      payload: { id, name, house, topNotes, heartNotes, baseNotes, image },
    });
  };

  const scentOfTheDayAdd = () => {
    dispatch({
      type: "scentOfTheDay:add",
      payload: { id, name, house, topNotes, heartNotes, baseNotes, image },
    });
  };

  return (
    <div className={styles.width}>
      <ArrowLeft setScentChoice={setScentChoice} /> <p>Scent Details</p>
      <h3>{name}</h3>
      <p>{house}</p>
      <img src={image} alt={name} className={styles.image} />
      <p>Top notes: {topNotes?.join(", ")}</p>
      <p>Heart notes: {heartNotes?.join(", ")}</p>
      <p>Base notes: {baseNotes?.join(", ")}</p>
      <button
        onClick={() => {
          libraryAdd();
          alert("added to library!");
        }}
      >
        Add to library
      </button>
      <button
        onClick={() => {
          wishlistAdd();
          alert("added to wishlist!");
        }}
      >
        Add to wishlist
      </button>
      <button
        onClick={() => {
          scentOfTheDayAdd();
          alert("added scent of the day@!");
        }}
      >
        Add Scent of the day
      </button>
    </div>
  );
};

const ListSearch = ({ setScentChoice }) => {
  const [input, setInput] = useState("");
  const [scentList, setScentList] = useState([]);

  const handleInput = async () => {
    const res = await fetch(`${process.env.API_HOST}/scents`);
    const scents = await res.json();
    setScentList(scents);
  };

  return (
    <>
      <Link href="/">
        <X />
      </Link>
      <p>Select a scent to add to your library</p>
      <div className={styles.searchBar}>
        <label htmlFor="search">Enter name or keyword</label>
        <div className={styles.formControl}>
          <div className={styles.searchIcon}>
            <MagnifyingGlass />
            <input
              type="text"
              name="search"
              className={styles.input}
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
                !scentList.length ? handleInput() : null;
              }}
            />
          </div>
        </div>
        {input && <ScentList list={scentList} handler={setScentChoice} />}
      </div>
    </>
  );
};

export default function () {
  const [scentChoice, setScentChoice] = useState(null);

  return (
    <main className={styles.container}>
      {scentChoice ? (
        <PerfumeView
          id={scentChoice.id}
          name={scentChoice.name}
          house={scentChoice.house}
          image={scentChoice.image}
          topNotes={scentChoice.topNotes}
          heartNotes={scentChoice.heartNotes}
          baseNotes={scentChoice.baseNotes}
          setScentChoice={setScentChoice}
        />
      ) : (
        <ListSearch setScentChoice={setScentChoice} />
      )}
    </main>
  );
}
