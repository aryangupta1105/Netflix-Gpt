import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { YT_URL, YT_URL_FEATURES } from "../utils/constants";
const VideoBackground = ({movie_id})=>{
    // creating custom hook..
    // to fetch the movie trailer we  will use video api in tmdb...
    useMovieTrailer(movie_id);
    const trailer = useSelector((store)=>store.movies.TrailerVideo);
    
    return(
        <div className=" w-screen">
        {trailer &&
                <iframe
                className="w-screen h-screen border-none aspect-video"
                src={YT_URL + trailer[0].key + YT_URL_FEATURES}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ border: "none" }}
            />
           
        }
    </div>
    )

}

export default VideoBackground;