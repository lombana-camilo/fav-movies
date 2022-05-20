import { Link } from "react-router-dom";

const MovieCard = ({ title, img, year, id }) => {
  return (
    <div className="flex flex-col m-4 w-48 h-72 bg-nav rounded-lg">
      <Link to={`/movie/${id}`} key={id} className="flex h-5/6">
        <img src={img} alt="poster" className="w-full" />
      </Link>
      <h2 className="p-2 text-xs text-center font-semibold max-w-full">
        {title}-{year}
      </h2>
    </div>
  );
};

export default MovieCard;
