// Does same job as createStore, but also sets up automatically: devtools, thunk middleware
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movies-slice.js";
//firebase
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";

export default configureStore({
  //configureStore automatically calls combineReducers
  reducer: {
    movies: moviesReducer
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {extraArgument:{getFirestore,getFirebase}}
   })
  })

// middleware: getDefaultMiddleware({
    // thunk: {extraArgument: myApiService}
  // })
