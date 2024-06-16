import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const HeroSection = ()=>{


    const movies = useSelector((store)=>store.movies?.NowPlayingMovies);
    if(!movies) return;
    const random =Math.floor(Math.random() * (movies.length - 1));
    const mainMovie = movies[0];
    const {original_title , overview , id} = mainMovie;
    console.log(mainMovie);
    return(
        <div className="overflow-hidden">
            {/* 
                -Video Background (comes from store)
                -Video Title (scale on hover)...
                -Some Buttons 
             */}
             <VideoTitle title={original_title} overview={overview}/>
             <VideoBackground movie_id={id}/>
        </div>
    )
};

export default HeroSection;