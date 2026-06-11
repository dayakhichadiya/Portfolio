import Link from "next/link";
import styles from "./Header.module.scss";
import { NAVIGATION } from "@/contants/navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          DK.
        </Link>

        <nav>
          <ul className={styles.navList}>
            {NAVIGATION.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;