import Link from "next/link";
import styles from "./login.module.css";

export default function () {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <span className={styles.wordmark}>osmē</span>
      </h1>
      <div className={styles.formControl}>
        <form className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input type="text" name="email" className={styles.input} />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <span></span>
          <input type="text" name="password" className={styles.input} />
          <Link href="">Forgot Password</Link>
          <button type="submit" className={styles.primaryButton}>
            Log in
          </button>
          <span>or</span>
          <button className={styles.secondaryButton}>Create Account</button>
        </form>
      </div>
    </main>
  );
}
