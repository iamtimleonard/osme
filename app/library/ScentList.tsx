import Image from "next/image";
import styles from "./library.module.css";

type Props = {
  list: {
    image: any;
    name: string;
    house: string;
  }[];
};

export default function ({ list }: Props) {
  return list.map(({ image, name, house }, idx) => (
    <div className={styles.row} key={idx}>
      <Image
        src={image}
        alt={`${name} by ${house}`}
        height={125}
        className={styles.bottleImage}
      />
      <div className={styles.title}>
        <p>{name}</p>
        <p>{house}</p>
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
