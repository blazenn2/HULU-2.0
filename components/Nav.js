import request from "../utils/request"

const Nav = () => {
    // console.log(Object.entries(request));
    return (
        <nav className="relative">
            <div className="flex lg:justify-around font-bold lg:overflow-visible overflow-x-scroll overflow-y-hidden scrollbar-hide space-x-5 my-6 px-4">
                {Object.entries(request).map(([key, { title, url }]) => <h2 className="hover:scale-125 cursor-pointer hover:text-white last:z-50">{title}</h2>)}
            </div>
            <div className="lg:hidden sm:visible absolute right-0 top-0 w-1/12 h-full bg-gradient-to-l from-[#06202A]"></div>
        </nav>
    )
}

export default Nav
