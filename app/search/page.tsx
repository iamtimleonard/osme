"use client";

import { useContext, useState } from "react";
import { Search01Icon } from "../library/page";
import styles from "./search.module.css";
import ScentList from "./ScentList";
import bottle1 from "../../public/bottle1.jpg";
import bottle2 from "../../public/bottle2.jpg";
import bottle3 from "../../public/bottle3.jpg";
import bottle4 from "../../public/bottle4.jpg";
import bottle5 from "../../public/bottle5.webp";
import Link from "next/link";
import Image from "next/image";
import { ScentReducerContext } from "../providers";

const LIBRARY = [
  {
    id: 1,
    image: bottle1,
    name: "Chance",
    house: "Chanel",
    topNotes: ["Pink Peppercorn"],
    baseNotes: ["Jasmine", "Iris"],
    heartNotes: ["Patchouli", "Musk", "Vanilla"],
  },
  {
    id: 2,
    image: bottle2,
    name: "Debaser",
    house: "D.S. & Durga",
    topNotes: ["Green notes", "Bergamot", "Pear"],
    baseNotes: ["Fig", "Coconut", "Iris"],
    heartNotes: ["Wood", "Tonka", "Moss"],
  },
  {
    id: 3,
    image: bottle3,
    name: "Little Flower",
    house: "Regime des Fleurs",
    topNotes: ["Rose", "Pomelo"],
    baseNotes: ["Honeysuckle"],
    heartNotes: ["Palo Santo", "Incense"],
  },
  {
    id: 4,
    image: bottle4,
    name: "Hwyl",
    house: "Aesop",
    topNotes: ["Spice", "Thyme"],
    baseNotes: ["Cypress", "Wood"],
    heartNotes: ["Vetiver", "Oakmoss"],
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

const ArrowLeft = ({ setScentChoice }) => (
  <svg
    width="32"
    height="24"
    viewBox="0 0 32 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={() => setScentChoice(null)}
    className={styles.backArrow}
  >
    <path
      d="M10 12l6-6M10 12l6 6"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <line
      x1="10"
      y1="12"
      x2="30"
      y2="12"
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
      payload: { id, name, house, topNotes, heartNotes, image },
    });
  };

  const wishlistAdd = () => {
    dispatch({
      type: "wishlist:add",
      payload: { id, name, house, topNotes, heartNotes, image },
    });
  };

  const scentOfTheDayAdd = () => {
    dispatch({
      type: "scentOfTheDay:add",
      payload: { id, name, house, topNotes, heartNotes, image },
    });
  };

  return (
    <div className={styles.width}>
      <ArrowLeft setScentChoice={setScentChoice} /> <p>Scent Details</p>
      <h3>{name}</h3>
      <p>{house}</p>
      <Image src={image} alt={name} width={300} />
      <p>Top notes: {topNotes.join(", ")}</p>
      <p>Heart notes: {heartNotes.join(", ")}</p>
      <p>Base notes: {baseNotes.join(", ")}</p>
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

const ListSearch = ({ setScentChoice, input, setInput }) => {
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
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
            />
          </div>
        </div>
        {input && <ScentList list={LIBRARY} handler={setScentChoice} />}
      </div>
    </>
  );
};

export default function () {
  const [scentChoice, setScentChoice] = useState(null);
  const [input, setInput] = useState("");
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
        <ListSearch
          setScentChoice={setScentChoice}
          input={input}
          setInput={setInput}
        />
      )}
    </main>
  );
}
