import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroSection from "./HeroSection";
import MoviesSection from "./MoviesSection";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTVSeries from "../hooks/usePopularTVSeries";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";


const Browse = ()=>{
    const showGPTSearch = useSelector((store)=>store.gpt.showGPTSearch);

    useNowPlayingMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    usePopularMovies();
    usePopularTVSeries(); 
    return(
        <div className="">
            <Header/>
            {!showGPTSearch?(
                <><HeroSection/>
                <MoviesSection/></>
            ):<GPTSearch/>
            }
            
        </div>
    )
}


export default Browse;