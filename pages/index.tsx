import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Resutls from "./components/Results/Resutls";
import handler from "../utils/handler";
import { Data } from "../utils/types";

type Props = {
  data: Array<Data>;
};
const Home: NextPage<Props> = (props: Props) => {
  return (
    <div>
      <Head>
        <title>TMDB Library</title>
        <meta name="description" content="TMDB movies library by anesmeister" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <Header />
      <Nav />
      <Resutls results={props.data} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const data = await handler(String(context.query.genre));

  return {
    props: {
      data,
    },
  };
};

export default Home;
