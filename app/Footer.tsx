import Link from "next/link";
import styles from "./home.module.css";

const Home = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 14L16 4L28 14Z" fill="black" />

    <rect x="8" y="14" width="16" height="14" fill="black" />

    <rect x="14" y="20" width="4" height="8" fill="white" />
  </svg>
);

const Community = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="14" r="6" stroke="black" strokeWidth="2" />
    <path
      d="M18 28c0-6 12-6 12 0v4h-12v-4Z"
      stroke="black"
      strokeWidth="2"
      fill="none"
    />

    <circle cx="24" cy="26" r="6" stroke="black" strokeWidth="2" />
    <path
      d="M18 40c0-6 12-6 12 0v4h-12v-4Z"
      stroke="black"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

export default function () {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/library">Library</Link>
        </li>
        <li>
          <Link href="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
      </ul>
    </footer>
  );
}
