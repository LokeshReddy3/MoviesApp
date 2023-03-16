import axios from 'axios';

const apiURL = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=a7c1bf2be0d4a7b5d2e8ca9c8190ce79'
// get Popular movies
export const getPopularMovies = async () => {
    const resp = await axios.get(
      `${apiURL}/movie/popular?${apiKey}`
      );
      // console.log(JSON.stringify(resp.data.results[0], null, 2));
      return resp.data.results;
  };

//   get upcoming movies

export const getUpcomingMovies = async () => {
    const resp = await axios.get(
      `${apiURL}/movie/upcoming?${apiKey}`
      );
      // console.log(JSON.stringify(resp.data.results[0], null, 2));
      return resp.data.results;
  };

//   get PopularTv

export const getPopularTv = async () => {
    const resp = await axios.get(
      `${apiURL}/tv/popular?${apiKey}`
      );
      // console.log(JSON.stringify(resp.data.results[0], null, 2));
      return resp.data.results;
  };