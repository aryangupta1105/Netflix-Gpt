const GPTSearchBar = ()=>{
    return (
        <div className="px-10">
            <h2 className=" text-center text-5xl w-8/12 mx-auto font-bold text-white opacity-80 ">Enhance Your Movie Experience with AI</h2>
            <p className="text-center text-gray-400 pt-5 text-xl"> Netflix and chill with gpt!❤️</p>
            <form className="flex p-4 px-6 m-6  text-white items-center justify-center" onSubmit={(e)=>e.preventDefault}>  
                <input type="text" className=" w-10/12 px-6 p-4 text-2xl outline-none  focus:bg-opacity-20 rounded-lg bg-white text-white shadow-xl placeholder:text-gray-300 bg-opacity-30 " placeholder="What would like to watch today?" ></input>
                <button type="submit" className="bg-red-600 hover:bg-red-700 transition-all duration-200 p-5 px-6 rounded-lg mx-1 ">Search<i class="fa-solid fa-magnifying-glass ml-3"></i></button>
            </form>
        </div>
    )
}

export default GPTSearchBar;