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
    <div className="absolute top-24 flex flex-col h-3/4 mx-36">
      <h1 className="w-full text-center font-bold text-5xl p-4"> {movieDetails.Title} </h1>
      <div className="flex items-start">
        <img src={movieDetails.Poster} alt="Poster" className="h-full w-1/3" />
        <div className="flex flex-col">
          <p className="p-16"> {movieDetails.Plot} </p>
               <div className="flex justify-around">
                  <div>
                     <h3>imdb Rating</h3>
                     <p>{movieDetails.imdbRating}</p>
                  </div>
                  <div>
                     <h3>Director</h3>
                     <p>{movieDetails.Director}</p>
                  </div>
                  <div>
                     <h3>Language</h3>
                     <p>{movieDetails.Language}</p>
                  </div>
               </div>
        </div>
      </div>
      <div className="text-focus">
        <FavouriteButtons imdbID={id} />
      </div>
    </div>
  );
};

export default MovieDetails;
