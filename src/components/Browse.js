import useNowPlayingMovies from "../hooks/useNowplayingMovies";
import Header from "./Header";
import MainContainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    
    useNowPlayingMovies();

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
