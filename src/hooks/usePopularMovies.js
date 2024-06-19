import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const usePopularMovies = ()=>{
       
    const PopularMovies = useSelector((store)=>store.movies.PopularMovies);
        useEffect(()=>{
            !PopularMovies && getPopularMovies();
        } , []);

    const dispatch = useDispatch();
    
    // creating a custom hook...
    
    const getPopularMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=2', options);
        const json = await data.json();
        dispatch(addPopularMovies(json?.results));
        
    }   
   
}

export default usePopularMovies;