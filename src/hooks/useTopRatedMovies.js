import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";
const useTopRatedMovies = ()=>{
       
    const TopRatedMovies = useSelector((store)=>store.movies.TopRatedMovies);
        useEffect(()=>{
            !TopRatedMovies && getTopRatedMovies();
        } , []);
    const dispatch = useDispatch();
    
    // creating a custom hook...
    
    const getTopRatedMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options);
        const json = await data.json();
        dispatch(addTopRatedMovies(json?.results));
    }   
   
}

export default useTopRatedMovies;