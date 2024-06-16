import { useEffect, useState } from "react"
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movie_id)=>{
    // Instead we can use redux store...
    // const [movieTrailer , setMovieTrailer] = useState(null);
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchMovieTrailer();
    },[movie_id]);

    const fetchMovieTrailer = async()=>{
           try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?`, options);
            const json = await response.json();

            const trailers = json?.results?.filter((trailer) => trailer.type === "Trailer" ) || json?.results[0];

            const trailer = trailers?.filter((video)=>video.name === "Official Trailer") || trailers[0]; 

            dispatch(addTrailerVideo(trailer));

        } catch (error) {
            console.error("Failed to fetch movie trailers:", error);
        }
    }
}

export default useMovieTrailer;