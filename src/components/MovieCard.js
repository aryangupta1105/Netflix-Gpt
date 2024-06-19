import useGenre from "../hooks/useGenre";
import { TMDB_IMAGE_URL } from "../utils/constants";

const MovieCard = ({movieData })=>{
    const {original_title , poster_path , backdrop_path , name , genre_ids ,first_air_date , vote_average,release_date } = movieData ;
    const genres = useGenre(genre_ids);
    const releaseYearTv = first_air_date  && first_air_date.split("-")[0];
    const releaseYearMovie = release_date  && release_date.split("-")[0];
    return (
        <div className="md:w-[200px] w-[100px] relative group ">
            <img src={
            poster_path !== null
              ? `${TMDB_IMAGE_URL}${poster_path}`
              : backdrop_path !== null
                ? `${TMDB_IMAGE_URL}${backdrop_path}`
                : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png" // Replace with the path to your dummy image
          } className="w-fit rounded-lg" loading="lazy"></img>
            <div className="absolute top-0 md:py-20 py-5  cursor-pointer w-full text-gray-300 bg-black bg-opacity-50 h-0  hidden group-hover:scale-100 group-hover:h-full text-center transition-all duration-1000 group-hover:block ">
                <h1 className="md:text-2xl text-xs  font-bold ">{original_title || name}</h1>
                <p className="text-xs md:font-bold ">{releaseYearTv || releaseYearMovie}</p>
                <p className="text-xs md:font-bold text-green-500"><i class="fa-solid fa-star"></i> Rating: {vote_average}</p>
                <div className="flex flex-wrap md:gap-2 gap-1 px-[3px] items-center justify-center md:text-lg text-xs md:mt-5">
                {genres && genres.map((genre, index) => (
                    <p key={index} className="">{genre}</p>
                ))}
                </div>
            </div>
        </div>
    )
}

export default MovieCard;

