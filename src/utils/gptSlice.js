import { createSlice } from "@reduxjs/toolkit";
import GPTSearch from "../components/GPTSearch";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: null
    },
    reducers:{
        toggleGPTSearch: (state , action)=>{
            state.showGPTSearch = !state.showGPTSearch;
        }
    }
})

export const {toggleGPTSearch} =  gptSlice.actions;
export default gptSlice.reducer