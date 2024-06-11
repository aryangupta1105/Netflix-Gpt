const Header = ()=>{
    return(
        <div className="w-full absolute top-0  bg-gradient-to-b from-black to-transparent h-screen">
            <div className="flex max-w-[1440px] w-10/12 mx-auto justify-between px-8 p-2 items-center">
                <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className="w-[190px]"></img>
                <div className="flex">
                    <div className="px-6 p-1 border bg-transparent rounded-sm  border-gray-400 text-white font-semibold">
                        <select type="search" className="bg-transparent outline-none border-none"  name="choices" >
                                <option value="English" className="px-2 text-black">English</option>
                                <option value="Hindi" className="px-2 text-black">Hindi</option>
                        </select>
                    </div>

                    <button className=" ml-5 bg-red-600 rounded-md px-4 text-white p-1">Sign In</button>
            </div>
        </div>
        </div>
    )
}

export default Header;