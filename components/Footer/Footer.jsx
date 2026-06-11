import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      <div>
        <h2>Shahi Cafe</h2>
        <p>@Copyright</p>
      </div>

      <div className={styles.links}>
        <a>Home</a>
        <a>Contact</a>
      </div>

    </footer>
  );
}