import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const usePopularMovies = ()=>{
       
    useEffect(()=>{
        getPopularMovies();
    } , []);

    const dispatch = useDispatch();
    
    // creating a custom hook...
    
    const getPopularMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=2', options);
        const json = await data.json();
        dispatch(addPopularMovies(json?.results));
        console.log("popular");
        console.log(json.results);
    }   
   
}

export default usePopularMovies;