import { useEffect } from "react"
import { addNowPlayingMovies, addPopularMovies , addTopRatedMovies , addUpcomingMovies} from "../utils/moviesSlice";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
const useNowPlayingMovies = ()=>{
       const NowPlayingMovies = useSelector((store)=>store.movies.NowPlayingMovies);
        useEffect(()=>{
            !NowPlayingMovies && getNowPlayingMovies();
        } , []);

        const dispatch = useDispatch();
        
        // creating a custom hook...
        
        const getNowPlayingMovies = async ()=>{
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options);
            const json = await data.json();
            dispatch(addNowPlayingMovies(json?.results));
        }   
       
}

export default useNowPlayingMovies;



