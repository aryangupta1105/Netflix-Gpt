// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import TVSeriesReducer from "./tvSeriesSlice";


const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        TVSeries: TVSeriesReducer,
    },
});

export default appStore;
