import { useEffect, useState } from "react"
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";

const useTMDBData = ()=>{
       
        useEffect(()=>{
            getNowPlayingMovies();
        } , []);

        const dispatch = useDispatch();
        
        // creating a custom hook...
        
        const getNowPlayingMovies = async ()=>{
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json?.results));
        }   
}

export default useTMDBData;

