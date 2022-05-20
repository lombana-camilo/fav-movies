import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchDetails } from "./../../store/movies/apiFunctions.js";
import { addDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { favMoviesRef, db } from "./../../config/firebase";

const MovieDetails = () => {
  const { movieDetails } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);

  const addToFav = async () => {
      //using setDoc to custom the document's id
      await setDoc(doc(db,"favMovies",id),{...movieDetails})
  };

  return (
    <div className="absolute top-16">
      <h1>Details</h1>
      <h1>{movieDetails.Title}</h1>
      <img src={movieDetails.Poster} alt="Poster" />
      <button onClick={addToFav} className="bg-focus">
        Add to Favourites
      </button>
      <p> {movieDetails.Plot} </p>
    </div>
  );
};

export default MovieDetails;
