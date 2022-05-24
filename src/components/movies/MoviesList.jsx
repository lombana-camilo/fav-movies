import SearchBar from "./SearchBar.jsx";
import MovieCard from "./MovieCard.jsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./../../store/movies/apiFunctions.js";

const MoviesList = () => {
  const { moviesList } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const onSearch = () => dispatch(fetchMovies(searchInput));

  return (
    <div>
      <SearchBar setSearchInput={setSearchInput} onSearch={onSearch} />

      <div className="flex flex-wrap">
            { moviesList ?
            moviesList.map((m) => (
               <MovieCard title={m.Title} img={m.Poster} year={m.Year} id={m.imdbID} key={m.imdbID}/>
            ))
            :
            <h1 className="text-focus w-full text-center">No Movies Found...</h1>
         }
      </div>
    </div>
  );
};

export default MoviesList;
