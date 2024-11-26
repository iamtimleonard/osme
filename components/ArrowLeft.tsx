import styles from "./components.module.css";

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

export default ArrowLeft;
