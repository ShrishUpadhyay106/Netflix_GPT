import { useTransition } from "react";
import useNowPlayingMovies from "../hooks/useNowplayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTopRated from "../hooks/useTopRated";

const Browse = () => {
    
    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTrendingMovies();
    useTopRated();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>

      {/* Maincontainer
       -videobg
       -videotile
      SecondaryContainer
       -Movielist
       -cards  */}
    </div>
  );
};
export default Browse;
