import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackGround = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <iframe
      className="
    absolute
    top-1/2 left-1/2
    w-[133%] h-[133%]
    -translate-x-1/2 -translate-y-1/2
    pointer-events-none
  "
      src={
        "https://www.youtube.com/embed/" +
        trailerVideo?.key +
        "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
        trailerVideo?.key
      }
      allow="autoplay; encrypted-media"
    />
  );
};

export default VideoBackGround;
