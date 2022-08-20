import FavouriteButtons from "./FavouriteButtons";
import { Link } from "react-router-dom";

const MovieCard = ({ title, img, year, id }) => {
  return (
    <div className=" group flex relative flex-col m-3 w-3/4 md:w-48 h-96 md:h-72 bg-nav rounded-lg transition-transform hover:scale-105 group">
      <img src={img} alt={title} className="flex w-full h-5/6" />
      <div className=" absolute w-full h-full opacity-0 group-hover:opacity-90 group-hover:transition">
        <FavouriteButtons imdbID={id} />
      </div>
      <Link to={`/movie/${id}`} key={id} className="z-30">
        <h2 className="p-2 text-xs text-center font-semibold max-w-full group-hover:text-focus">
          {title.substring(0, 20)}-{year}
        </h2>
      </Link>
    </div>
  );
};

export default MovieCard;
