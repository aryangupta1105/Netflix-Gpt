const VideoTitle = ({title , overview})=>{
    return(
        <div className="absolute w-full h-screen bg-gradient-to-r from-black inset-0 mx-auto px-14 text-white z-20  flex flex-col gap-5 lg:pt-[15%] lg:justify-normal pt-[46%]  ">
            <h1 className="lg:text-6xl md:text-4xl text-3xl  font-bold w-5/12">{title}</h1>
            <p className="md:w-5/12 w-7/12 sm:flex hidden">{overview}</p>
            {/* buttons */}
            <div className="flex gap-2 md:mt-5 items-center text-black ">
                <button className="bg-white text-black md:py-2 py-1 px-4 md:px-6 text-md md:text-xl  rounded-sm hover:bg-gray-400 transition-all duration-200"><i class="fa-solid fa-play"></i> Play</button>
                <button className=" bg-gray-500 hover:bg-opacity-70  md:py-2 py-1 px-4 md:px-6 text-md md:text-xl rounded-sm duration-200 transition-all"><i class="fa-solid fa-circle-info mr-2"></i>More info</button>        
            </div>
        </div>
    )
}

export default VideoTitle;