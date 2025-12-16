import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  if (!movies || movies.length === 0) return null;
  return (
    <div className="px-6">
      <h1 className="text-white font-bold text-2xl relative z-30 mx-4">
        {title}
      </h1>
      <div className="flex ">
        <div className="flex overflow-x-scroll w-screen scrollbar-hide scroll-smooth">
          {Array.isArray(movies) &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
