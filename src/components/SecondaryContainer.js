import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  if (!movies) return null;

  return (

    
    <div className="-mt-36 bg-black  overflow-hidden"> 
    <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
    <MovieList title="Trending" movies={movies?.trendingMovies} />
    <MovieList title="Popular" movies={movies?.popularMovies} />
    <MovieList title="Upcoming" movies={movies?.upcomingMovies} />
    <MovieList title="Top-Rated" movies={movies?.topRated} />
     </div>
   

   );
};

export default SecondaryContainer;
