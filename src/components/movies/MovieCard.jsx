import FavouriteButtons from "./FavouriteButtons";
import { Link } from "react-router-dom";

const MovieCard = ({ title, img, year, id }) => {
  return (
    <div className=" group flex relative flex-col m-3 w-48 h-72 bg-nav rounded-lg transition-transform hover:scale-105 group">
      <img src={img} alt={title} className="flex w-full h-5/6" />
      <Link to={`/movie/${id}`} key={id}>
        <h2 className="p-2 text-xs text-center font-semibold max-w-full group-hover:text-focus">
          {" "}
          {title}-{year}{" "}
        </h2>
      </Link>
      <div className="opacity-0 group-hover:opacity-90 group-hover:transition">
        <FavouriteButtons imdbID={id} />
      </div>
    </div>
  );
};

export default MovieCard;
