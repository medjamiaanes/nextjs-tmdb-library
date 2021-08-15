import styles from "./showitem.module.css";
import Image from "next/image";
import { Data } from "../../utils/types";

type Props = {
  data: Data;
};

const ShowItem = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.cover}
        src={`https://image.tmdb.org/t/p/original${data.cover}`}
        width={1920}
        height={1080}
        layout="responsive"
        alt={data.title}
      />
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.details}>
        <div className={styles.detail}>
          <i className={`ri-calendar-line ${styles.detailIcon}`}></i>
          {data.releaseDate}
        </div>
        <div className={styles.detail}>
          <i className={`ri-star-fill ${styles.detailIcon}`}></i>
          {data.rating}
        </div>
        <div className={styles.detail}>
          <i className={`ri-thumb-up-fill ${styles.detailIcon}`}></i>
          {Math.round(data.likes)}
        </div>
      </div>
      <p className={styles.overview}>{data.overview}</p>
    </div>
  );
};

export default ShowItem;
