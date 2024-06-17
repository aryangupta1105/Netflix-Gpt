import { useDispatch } from "react-redux";
import { addPopularTVSeries } from "../utils/tvSeriesSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const usePopularTVSeries = ()=>{
       
    useEffect(()=>{
        getPopularTVSeries();
    } , []);

    const dispatch = useDispatch();
    
    // creating a custom hook...
    
    const getPopularTVSeries = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/tv/popular?page=1', options);
        const json = await data.json();
        dispatch(addPopularTVSeries(json?.results));
        console.log("popular tv series");
        console.log(json.results);
    }   
   
}

export default usePopularTVSeries;