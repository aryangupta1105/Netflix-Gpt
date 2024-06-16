import Header from "./Header";
import useTMDBData from "../hooks/useTMDBData";
import HeroSection from "./HeroSection";
import MoviesSection from "./MoviesSection";


const Browse = ()=>{
    useTMDBData();
    return(
        <div className="">
            <Header/>
            <HeroSection/>
            <MoviesSection/>
        </div>
    )
}


export default Browse;