import styles from "./results.module.css";
import ShowItem from "../ShowItem/ShowItem";
import { Data } from "../../../utils/types";

type Props = {
  results: Array<Data>;
};

const Resutls = ({ results }: Props) => {
  return (
    <main className={styles.container}>
      {results.map((result, index) => (
        <ShowItem key={index} data={result} />
      ))}
    </main>
  );
};

export default Resutls;
