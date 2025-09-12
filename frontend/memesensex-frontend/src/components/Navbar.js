import logo_ribbon from "../asset/logo_ribbon.svg";

const Navbar = () => {
    return ( 
        <nav className="bg-white p-4 border-b border-gray-200 shadow-md flex items-center gap-3">
            <img src={logo_ribbon} alt="Logo" className="h-10 w-10"/>
            <h1 className="text-2xl font-bold">
                <span className="text-[#31b2b4]">Meme</span>
                <span className="text-gray-500">Sensex</span>
            </h1>
        </nav>
    );
}
 
export default Navbar;