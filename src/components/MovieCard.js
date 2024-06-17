import { TMDB_IMAGE_URL } from "../utils/constants";

const MovieCard = ({movieData , TVSeriesData})=>{
    const {original_title , poster_path , backdrop_path , name} = movieData;
    return (
        <div className="w-[200px] relative group ">
            <img src={TMDB_IMAGE_URL + poster_path} className="w-fit rounded-lg"></img>
            <h2 className="absolute top-0 py-20 cursor-pointer w-full text-gray-300 bg-black bg-opacity-50 h-full hidden text-3xl scale-0 group-hover:scale-100 text-center transition-all duration-200 font-bold group-hover:block ">{original_title || name}</h2>
        </div>
    )
}

export default MovieCard;

