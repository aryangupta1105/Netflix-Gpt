import useGenre from "../hooks/useGenre";
import { TMDB_IMAGE_URL } from "../utils/constants";

const MovieCard = ({movieData })=>{
    const {original_title , poster_path , backdrop_path , name , genre_ids ,first_air_date , vote_average,release_date } = movieData ;
    const genres = useGenre(genre_ids);
    const releaseYearTv = first_air_date  && first_air_date.split("-")[0];
    const releaseYearMovie = release_date  && release_date.split("-")[0];
    return (
        <div className="w-[200px] relative group ">
            <img src={
            poster_path !== null
              ? `${TMDB_IMAGE_URL}${poster_path}`
              : backdrop_path !== null
                ? `${TMDB_IMAGE_URL}${backdrop_path}`
                : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png" // Replace with the path to your dummy image
          } className="w-fit rounded-lg"></img>
            <div className="absolute top-0 py-20 cursor-pointer w-full text-gray-300 bg-black bg-opacity-50 h-full hidden scale-0 group-hover:scale-100 text-center transition-all duration-200 group-hover:block ">
                <h1 className="text-2xl font-bold">{original_title || name}</h1>
                <p className="font-bold">{releaseYearTv || releaseYearMovie}</p>
                <p className="font-bold text-green-500"><i class="fa-solid fa-star"></i> Rating: {vote_average}</p>
                <div className="flex flex-wrap gap-2 items-center justify-center mt-10">
                {genres && genres.map((genre, index) => (
                    <p key={index}>{genre}</p>
                ))}
                </div>
            </div>
        </div>
    )
}

export default MovieCard;

