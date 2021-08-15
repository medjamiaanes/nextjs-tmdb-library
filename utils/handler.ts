import requests from "./_requests";
import _ from "lodash";
import { Data } from "./types";

const handler = async (genre: string): Promise<Array<Data>> => {
  try {
    const url = requests[genre]?.url || requests.fetchTrending.url;
    const request = await fetch(`https://api.themoviedb.org/3${url}`);
    const data = await request.json();

    const computedData: Array<Data> = data.results.map((data) => ({
      title: data?.title || data.original_name || data.original_title,
      overview: _.truncate(data?.overview, { length: 70 }),
      cover: data?.backdrop_path || data?.poster_path,
      releaseDate: data?.release_date || data?.first_air_date,
      rating: data?.vote_average,
      likes: data?.popularity,
    }));

    return Promise.resolve(computedData);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default handler;
