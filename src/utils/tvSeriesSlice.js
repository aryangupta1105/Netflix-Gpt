import { createSlice } from "@reduxjs/toolkit";
import { addPopularMovies } from "./moviesSlice";

const tvSeriesSlice = createSlice({
    name: "TVSeries",
    initialState : {
        PopularTVSeries: null,
    },
    reducers:{
        addPopularTVSeries: (state, action) => {
            state.PopularTVSeries = action.payload;
        },
    }
})

export const {addPopularTVSeries} = tvSeriesSlice.actions;
export default tvSeriesSlice.reducer;