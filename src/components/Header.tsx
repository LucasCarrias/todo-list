import logoSvg from "../assets/logo.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logoSvg} />
    </div>
  );
}
