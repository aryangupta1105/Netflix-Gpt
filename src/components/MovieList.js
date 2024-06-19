import MovieCard from "./MovieCard";
import "./MovieList.css";
import Shimmer from "./Shimmer";
const MovieList = ({title , movies})=>{
    
    return (
        <div className="px-12 md:py-10 py-2 overflow-hidden ">
                <h1 className="sm:text-3xl  text-xl text-white font-bold font-serif py-3 ">{title}</h1>
                <div className="hide-scrollbar flex mx-auto overflow-x-scroll overflow-y-hidden">
                    <div className="flex gap-8 flex-row ">
                        {movies && movies.length>0?(movies.map((movie)=>(
                            <MovieCard key={movie.id} movieData={movie} />
                        ))):null}
                </div>
            </div>
        </div>
    )
}

export default MovieList;