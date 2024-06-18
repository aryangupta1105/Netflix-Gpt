import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoviesSection = ()=>{
    const movieData = useSelector((store)=>store.movies);
    const TVSeriesData = useSelector((store)=>store.TVSeries);

    if(!movieData) return;
    return(
        <div className=" bg-black"> 
            {/*Movies List
                -Top Rated 
                 -Movie Cards * n
                -Upcoming
                -Now Playing  */}
            <div className="overflow-hidden relative -mt-48 z-[50]">
                <MovieList title={"Now Playing"} movies={movieData?.NowPlayingMovies}/>
                <MovieList title={"Top Rated"} movies={movieData?.TopRatedMovies}/>
                <MovieList title={"Trending"} movies={movieData?.PopularMovies}/>
                <MovieList title={"Upcoming"} movies={movieData?.UpcomingMovies}/>
                <MovieList title={"Popular Tv Series"} movies={TVSeriesData?.PopularTVSeries}/>

            </div>
        </div>
    )
};

export default MoviesSection;

