import axios from "axios";
import { setMoviesList, setMovieDetails } from "./movies-slice.js";
const URL = "http://www.omdbapi.com/";
const KEY = "fd962533";

export const fetchMovies = (search) => (dispatch) => {
  const config = { params: { s: search, apikey: KEY } };
  axios
    .get(URL, config)
    .then((res) => {
      dispatch(setMoviesList(res.data.Search));
    })
    .catch((e) => console.log(e));
};

export const fetchDetails = (id) => async (dispatch) => {
  const config = { params: { i: id, apikey: KEY } };
  const { data } = await axios.get(URL, config);
  dispatch(setMovieDetails(data));
};
