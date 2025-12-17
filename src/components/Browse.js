import useNowPlayingMovies from "../hooks/useNowplayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTopRated from "../hooks/useTopRated";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
    
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTrendingMovies();
    useTopRated();

  return (
    <div>
      <Header />
      {
        showGptSearch ? <GptSearch/>: <> <MainContainer/> <SecondaryContainer/> </>
      }
     
      

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
