const VideoTitle = ({title , overview})=>{
    return(
        <div className="absolute w-full h-screen bg-gradient-to-r from-black inset-0 mx-auto px-14 text-white flex flex-col gap-5 py-[18%]">
            <h1 className="text-6xl font-bold w-5/12">{title}</h1>
            <p className="w-5/12 text-lg">{overview}</p>
            {/* buttons */}
            <div className="flex gap-2 mt-5 items-center text-black ">
                <button className="bg-white text-black py-2 px-6 text-xl  rounded-sm hover:bg-gray-400 transition-all duration-200"><i class="fa-solid fa-play"></i> Play</button>
                <button className=" bg-white bg-opacity-50 p-2 px-6 text-lg  rounded-sm duration-200 transition-all"><i class="fa-solid fa-circle-info mr-2"></i>More info</button>        
            </div>
        </div>
    )
}

export default VideoTitle;