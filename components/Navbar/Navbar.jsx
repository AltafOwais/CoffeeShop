import Link from "next/link";
import styles from "./Navbar.module.css";


export default function Navbar() {
  return (
    <nav className={styles.navbar}>

      <h1 className={styles.logo}>
        Shahi Cafe
      </h1>


      <div className={styles.menu}>

        <Link href="/">
          Home
        </Link>

        <Link href="/Menu">
          Menu
        </Link>

        <Link href="/contact">
          Contact
        </Link>


        <Link href="/order">

          <button className={styles.button}>
            Order Now
          </button>

        </Link>

      </div>

    </nav>
  );
}