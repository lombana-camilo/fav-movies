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
    <div className="flex bg-bg h-fit text-justify pb-24 ">
      <div className="flex flex-col md:mx-36 mt-11 md:mt-24 md:h-screen ">
        <h1 className="w-full text-center font-bold text-5xl p-4">
          {movieDetails.Title}
        </h1>
        <div className="flex md:items-start flex-col md:flex-row items-center">
          <div className="flex flex-col w-4/6 md:w-1/2 h-full">
            <FavouriteButtons imdbID={id} />
            <img src={movieDetails.Poster} alt="Poster" className="h-3/4" />
          </div>
          <div className="flex flex-col px-12 py-4 md:p-12">
            <p className="pb-4 md:pb-12"> {movieDetails.Plot} </p>
            <div className="flex justify-around">
              <div>
                <h3 className="text-secondary">imdb Rating</h3>
                <p>{movieDetails.imdbRating}</p>
              </div>
              <div>
                <h3 className="text-secondary">Director</h3>
                <p>{movieDetails.Director}</p>
              </div>
              <div>
                <h3 className="text-secondary">Language</h3>
                <p>{movieDetails.Language}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
