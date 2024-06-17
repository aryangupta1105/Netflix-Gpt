import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroSection from "./HeroSection";
import MoviesSection from "./MoviesSection";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import usePopularTVSeries from "../hooks/usePopularTVSeries";


const Browse = ()=>{
    useNowPlayingMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    usePopularMovies();
    usePopularTVSeries(); 
    return(
        <div className="">
            <Header/>
            <HeroSection/>
            <MoviesSection/>
        </div>
    )
}


export default Browse;