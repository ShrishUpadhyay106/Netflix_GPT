
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {  addTrendingMovies, addUpcomingMovies } from "../utils/movieSlice";

const useTrendingMovies = () =>{
    const dispatch = useDispatch();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTrendingMovies(json.results));
  };
};
export default useTrendingMovies