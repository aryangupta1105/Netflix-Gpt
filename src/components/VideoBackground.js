import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { YT_URL, YT_URL_FEATURES } from "../utils/constants";
const VideoBackground = ({movie_id})=>{
    // creating custom hook..
    // to fetch the movie trailer we  will use video api in tmdb...
    useMovieTrailer(movie_id);
    const trailer = useSelector((store)=>store.movies.TrailerVideo);
    if(!trailer) return;
    
    return(
        <div className=" w-screen h-[200%] ">
        {trailer && trailer.length > 0 ? (
                <iframe
                className="w-screen h-screen border-none aspect-video"
                src={YT_URL + trailer[0].key + YT_URL_FEATURES + "&playlist="    +trailer[0].key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ border: "none" }}
            />
        ):<img src="https://i.pinimg.com/originals/a2/de/bf/a2debfb85547f48c3a699423ba75f321.gif"></img>
        }
    </div>
    )

}

export default VideoBackground;