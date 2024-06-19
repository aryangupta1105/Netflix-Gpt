import { useRef, useState } from "react";
import openai from "../utils/openAi";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addGPTMovies } from "../utils/gptSlice";
const GPTSearchBar = ()=>{

    const gptSearchText = useRef();
    
    const getMovie = async (movie_name)=>{
        
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie_name}&page=1`
                ,options
                );

                const json = await response.json();

                return json.results;
    
    }

    const dispatch = useDispatch();
    
    const handleGPTSearchClick = async()=>{
        // make an api call to fetch data from open ai
        // using gptsearchtext current value...
    
 


        // const query = "act as a Movie Recommendation system and suggest some movies for the query:" + gptSearchText.current.value + ". only give me names of 5 movies , comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, 3 idiots, Golmaal";
        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: query }],
        //     model: 'gpt-3.5-turbo',
        //   });
      
        // const gptMovies = gptResults.choices?.[0]?.message.content.split(", ");
        // const demogptResults = "Gadar, Sholay, Don, 3 idiots, Golmaal"
        
        const demogptResults = `${gptSearchText.current.value}`;

        const gptMovies = demogptResults.split(", ");
        
        const PromiseArray = gptMovies.map((movie)=>getMovie(movie));
        
        const tmdbResults = await Promise.all(PromiseArray);
        dispatch(addGPTMovies({query: demogptResults ,movieNames:gptMovies , movieResults:tmdbResults}));

    }

    return (
        <div className="px-10 ">
            <h2 className=" text-center text-5xl w-8/12 mx-auto font-bold text-white opacity-80 ">Enhance Your Movie Experience with AI</h2>
            <p className="text-center text-gray-400 pt-5 text-xl"> Netflix and chill with gpt!❤️</p>
            <form className="flex p-4 px-6 m-6  text-white items-center justify-center" onSubmit={(e)=>e.preventDefault()}>  
                <input type="text" ref={gptSearchText} className=" w-10/12 px-6 p-4 text-2xl outline-none  focus:bg-opacity-20 rounded-lg bg-white text-white shadow-xl placeholder:text-gray-300 bg-opacity-30 " placeholder="What would like to watch today?" ></input>
                <button type="submit" className="bg-red-600 hover:bg-red-700 transition-all duration-200 p-5 px-6 rounded-lg mx-1 " onClick={handleGPTSearchClick}
                >Search<i class="fa-solid fa-magnifying-glass ml-3"></i></button>
            </form>
        </div>
    )
}

export default GPTSearchBar;