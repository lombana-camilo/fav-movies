// Does same job as createStore, but also sets up automatically: devtools, thunk middleware
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movies-slice.js";
import userReducer from "./user/user-slice.js";
// import { getFirestore } from "redux-firestore";

export default configureStore({
  //configureStore automatically calls combineReducers
  reducer: {
    movies: moviesReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // thunk: {extraArgument:{getFirestore,getFirebase}},
      //allows firebase timestamp function
      serializableCheck: false,
    }),
});
