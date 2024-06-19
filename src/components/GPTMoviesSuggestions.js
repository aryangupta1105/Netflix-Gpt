import { useSelector } from "react-redux"; 
import MovieCard from "./MovieCard";
const GPTMoviesSuggestion = ()=>{

    const {GPTSearchText , MovieNames , GPTRecommendedMovies} = useSelector((store)=>store.gpt);
    // takes individual elements of nested array:
   if(!MovieNames) return null;
    const movieList =GPTRecommendedMovies.flat();

    const filteredMovies = movieList.filter((innerMovie) => MovieNames.includes(innerMovie.title));
  

    return (
        <div className="px-32  overflow-hidden">
        <h1 className="text-xl text-gray-400 font-bold font-serif mb-5 ">search results for  {GPTSearchText}</h1>
        <div className="hide-scrollbar flex mx-auto overflow-x-scroll overflow-y-hidden">
            <div className="flex gap-8 flex-row ">
                {filteredMovies && filteredMovies.length>0?(filteredMovies.map((movie)=>(
                    <MovieCard key={movie.id} movieData={movie} />
                ))):null}
        </div>
    </div>
</div>
    )
}

export default GPTMoviesSuggestion;