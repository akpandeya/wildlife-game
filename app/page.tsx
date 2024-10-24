import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       Wildlife Project
      </main>
      <footer className={styles.footer}>
        Footer lives here
      </footer>
    </div>
  );
}
