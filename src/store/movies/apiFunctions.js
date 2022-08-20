import axios from "axios";
import { setMoviesList, setMovieDetails } from "./movies-slice.js";
const URL = process.env.REACT_APP_URL
const KEY = process.env.REACT_APP_KEY

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
