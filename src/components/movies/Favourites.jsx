import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const Favourites = () => {
  const { favouriteMovies } = useSelector((state) => state.movies);

  return (
    <div className="flex flex-col relative h-fit md:h-screen pb-24">
      <h1 className="items-center mt-16 md:mt-32 w-full font-bold text-2xl text-secondary text-center">
        Your Favourite Movies
      </h1>
      <div className="flex flex-wrap z-0 mt-4 justify-center h-fit">
        {favouriteMovies.map((m) => (
          <MovieCard
            title={m.Title}
            img={m.Poster}
            year={m.Year}
            id={m.imdbID}
            key={m.imdbID}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
