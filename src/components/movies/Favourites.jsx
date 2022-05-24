import MovieCard from "./MovieCard";
import { useSelector} from "react-redux";

const Favourites = () => {
  const { favouriteMovies } = useSelector((state) => state.movies);

  return (
    <>
      <h1 className="absolute inset-y-20 items-center w-full font-bold text-2xl text-secondary text-center">
        Your Favourite Movies
      </h1>
      <div className="flex inset-y-28 absolute">
        {favouriteMovies.map((m) => (
          <div className="flex flex-col" key={m.imdbID}>
            <MovieCard
              title={m.Title}
              img={m.Poster}
              year={m.Year}
              id={m.imdbID}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Favourites;
