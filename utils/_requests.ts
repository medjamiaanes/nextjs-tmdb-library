const API_KEY = process.env.TMDB_API_KEY;

const requests = {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    active: true,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/trending/top_rated/week?api_key=${API_KEY}&language=en-US`,
    active: false,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
    active: false,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
    active: false,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
    active: false,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=9648`,
    active: false,
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=878`,
    active: false,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=37`,
    active: false,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=16`,
    active: false,
  },
  fetchTV: {
    title: "TV Movie",
    url: `/discover/movie/?api_key=${API_KEY}&with_genres=10770`,
    active: false,
  },
};
export default requests;
