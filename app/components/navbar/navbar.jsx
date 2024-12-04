import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <ul className={styles.navbar}>
        <li>
          <Link href="/" className={styles.navbarbtn}>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/page1" className={styles.navbarbtn}>
            <p>Components</p>
          </Link>
        </li>
        <li>
          <Link href="/page2" className={styles.navbarbtn}>
            <p>Styling</p>
          </Link>
        </li>
        <li>
          <Link href="/page3" className={styles.navbarbtn}>
            <p>Hooks</p>
          </Link>
        </li>
        <li>
          <Link href="/page4" className={styles.navbarbtn}>
            <p>Page 4</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
