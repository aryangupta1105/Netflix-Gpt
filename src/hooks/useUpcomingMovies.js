import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";
const useUpcomingMovies = ()=>{
       
    const UpcomingMovies = useSelector((store)=>store.movies.UpcomingMovies);
    useEffect(()=>{
        !UpcomingMovies && getUpcomingMovies();
    } , []);

    const dispatch = useDispatch();
    
    // creating a custom hook...
    
    const getUpcomingMovies  = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=2', options);
        const json = await data.json();
        dispatch(addUpcomingMovies(json?.results));
    }   
   
}

export default useUpcomingMovies;