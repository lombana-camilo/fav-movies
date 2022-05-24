import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
    favouriteMovies: [],
    movieDetails: [],
    status: "",
  },
  reducers: {
    //No need to mutate code! no return needed - emmer makes copies under the hood

    setMoviesList: (state, action) => {
      state.moviesList = action.payload;
    },

    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload;
    },

    setFavourites: (state, action) => {
      state.favouriteMovies = action.payload;
    },
  },
});

//CreateSlice creates an action creater for each of the functions inside the reducers
//  hover over getMovies!
export const { setMoviesList, setMovieDetails, setFavourites } =
  moviesSlice.actions;
export default moviesSlice.reducer;
