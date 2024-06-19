import { useSelector } from "react-redux";
import GPTMoviesSuggestion from "./GPTMoviesSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = ()=>{
    const gpt = useSelector((store)=>store.gpt);
    return (
        <div className="bg-gradient-to-b from-red-800 py-[45%] lg:py-[9%] to-black min-h-screen md:py-[15%] overflow-hidden ">
            <GPTSearchBar/>
            <GPTMoviesSuggestion/>      
        </div>
    )
}

export default GPTSearch;