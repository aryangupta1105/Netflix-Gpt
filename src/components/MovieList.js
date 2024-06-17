import MovieCard from "./MovieCard";
import "./MovieList.css";
const MovieList = ({title , movies})=>{
    
    return (
        <div className="px-12 py-10 overflow-hidden ">
                <h1 className="text-3xl text-white font-bold font-serif py-3 ">{title}</h1>
                <div className="hide-scrollbar flex mx-auto overflow-x-scroll overflow-y-hidden">
                    <div className="flex gap-8 flex-row ">
                        {movies && movies.length>0?(movies.map((movie)=>(
                            <MovieCard key={movie.id} movieData={movie} />
                        ))):<img src="https://i.pinimg.com/originals/a2/de/bf/a2debfb85547f48c3a699423ba75f321.gif"></img>}
                </div>
            </div>
        </div>
    )
}

export default MovieList;