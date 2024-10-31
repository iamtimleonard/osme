import styles from "./home.module.css";

export default function () {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.wordmark}>osmē</span>
        </h1>
        <div className={styles.formControl}>
          <form className={styles.form}>
            <label htmlFor="email" className={styles.label}>
              email
            </label>
            <input type="text" name="email" className={styles.input} />
            <label htmlFor="password" className={styles.label}>
              password
            </label>
            <input type="text" name="password" className={styles.input} />
            <button type="submit" className={styles.primaryButton}>
              Log in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
