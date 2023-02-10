import Menu from "./Menu"

const Header = () => {
    return <>
        <div className="absolute top-0 w-full ">
            <div className="container mx-auto px-5 py-5">
                <div className="flex justify-between items-center">
                    <p className="font-sans text-base leading-relaxed text-inherit mr-4 ml-2 cursor-pointer py-1.5 font-bold">
                        Material Tailwind React
                    </p>
                    <Menu />
                    <div className="flex items-center gap-2">
                        <div className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg block w-full">
                            Singin
                        </div>
                        <div className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] block w-full">
                            Login
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Header