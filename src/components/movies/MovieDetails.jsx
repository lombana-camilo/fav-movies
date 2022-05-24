import FavouriteButtons from "./FavouriteButtons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchDetails } from "./../../store/movies/apiFunctions.js";

const MovieDetails = () => {
  const { movieDetails, favouriteMovies } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    dispatch(fetchDetails(id));
    if (favouriteMovies.find((m) => m["imdbID"] === id)) {
      setIsFav(() => true);
    }
  }, [dispatch, id, favouriteMovies, isFav]);

  return (
    <div className="absolute top-24 flex flex-col h-3/4">
      <h1 className="w-full text-center font-bold text-5xl">{movieDetails.Title}</h1>
         <div className="flex">
            <img src={movieDetails.Poster} alt="Poster" className="h-full w-1/3"/>
            <p> {movieDetails.Plot} </p>
         </div>
         <div className="relative">
            <FavouriteButtons imdbID={id} />
         </div>
    </div>
  );
};

export default MovieDetails;
