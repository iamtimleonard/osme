import styles from "./home.module.css";
import ScentRow from "./ScentRow";
import bottle1 from "../public/bottle1.jpg";
import bottle2 from "../public/bottle2.jpg";
import bottle3 from "../public/bottle3.jpg";
import bottle4 from "../public/bottle4.jpg";
import bottle5 from "../public/bottle5.webp";

const LIBRARY = [
  { src: bottle1, alt: "Bottle1" },
  { src: bottle2, alt: "Bottle2" },
  { src: bottle3, alt: "Bottle3" },
];
const SOTD = [
  { src: bottle4, alt: "Bottle4" },
  { src: bottle5, alt: "Bottle5" },
  { src: bottle1, alt: "Bottle1" },
];
const WISHLIST = [
  { src: bottle3, alt: "Bottle3" },
  { src: bottle4, alt: "Bottle4" },
  { src: bottle5, alt: "Bottle5" },
];

export default function () {
  return (
    <main className={styles.container}>
      <h4 className={styles.welcome}>Hello, Chelsea.</h4>
      <ScentRow title="Your scent library" items={LIBRARY} />
      <ScentRow title="Recently worn" items={SOTD} />
      <ScentRow title="Wish list" items={WISHLIST} />
    </main>
  );
}
