import Image from "next/image";
import styles from "./header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={
          "https://themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
        }
        width={130}
        height={100}
        alt="imdb logo"
      />
    </header>
  );
}

export default Header;
