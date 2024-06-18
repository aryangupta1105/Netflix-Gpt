import GPTMoviesSuggestion from "./GPTMoviesSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = ()=>{
    return (
        <div className="relative h-screen w-screen bg-gradient-to-b from-red-800 to-black py-[9%] ">
            <GPTSearchBar/>
            <GPTMoviesSuggestion/>      
        </div>
    )
}

export default GPTSearch;