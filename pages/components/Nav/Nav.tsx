import React from "react";
import styles from "./nav.module.css";
import requests from "../../../utils/_requests";
import { useRouter } from "next/dist/client/router";
function Nav() {
  const router = useRouter();
  const [activeItem, setActiveItem] = React.useState<string | null>(null);
  React.useEffect(() => {
    const genre =
      new URL(window.location.href).searchParams.get("genre") ||
      "fetchTrending";
    setActiveItem(genre);
  }, []);

  return (
    <nav className={styles.nav}>
      {Object.entries(requests).map(([key, { title }]) => (
        <h2
          className={`${styles.navItem} ${
            activeItem === key ? styles.active : ""
          }`}
          key={key}
          onClick={() => {
            router.push(`/?genre=${key}`);
            setActiveItem(key);
          }}
        >
          {title}
        </h2>
      ))}
      <div className={styles.overlay}></div>
    </nav>
  );
}

export default Nav;
