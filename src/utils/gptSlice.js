import { createSlice } from "@reduxjs/toolkit";
import GPTSearch from "../components/GPTSearch";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: null,
        GPTRecommendedMovies: null,
        MovieNames: null,
        GPTSearchText: null,
    },
    reducers:{
        toggleGPTSearch: (state , action)=>{
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGPTMovies: (state,action) =>{
            const{query, movieNames , movieResults} = action.payload;
            state.GPTRecommendedMovies = movieResults;
            state.MovieNames = movieNames;
            state.GPTSearchText = query;
        },
        clearMovieResults: (state)=>{
            state.GPTSearchText = null;
            state.MovieNames = null;
            state.GPTRecommendedMovies = [];
        }
    }
})

export const {toggleGPTSearch , addGPTMovies , clearMovieResults} =  gptSlice.actions;
export default gptSlice.reducer