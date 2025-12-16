import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="flex-shrink-0 mx-3 my-4 w-52 z-20 gap-y-3 " >
      <img
        className="
          w-52 h-32
          object-cover
          rounded-lg
          cursor-pointer
          transition-transform duration-300 ease-out
          hover:scale-110
          hover:z-30
          shadow-lg
        "
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
