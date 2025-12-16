
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addTopRated } from "../utils/movieSlice";

const useTopRated = () =>{
    const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRated(json.results));
  };
};
export default useTopRated;