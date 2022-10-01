import { useState } from "react";

const NavBar = () => {
    const [mobileNav, setMobileNav] = useState(false)
    function toggleMobile() {
        setMobileNav(!mobileNav)
    }
    return(
        <nav className="bg-gray-100">
            <div className="max-w-screen mx-auto px-32">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-1">
                        <a className="py-5 pl-16" href="#">Digital Innovation</a>
                    </div>
                    <div className="hidden md:flex items-center space-x-1 font-heading text-2xl">
                        <a className="py-5 px-3" href="#">Home</a>
                        <a className="py-5 px-3" href="#">DI</a>
                        <a className="py-5 px-3" href="#">Projects</a>
                        <a className="py-5 px-3" href="#">Contact</a>
                        <a href="#" className="rounded-full border-2 border-black px-5">Login</a>
                    </div>
                    <div className="md:hidden flex items-center px-3">
                        <button className="mobile-menu-button" onClick={toggleMobile}>
                            <span>Menu</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`mobile-menu ${mobileNav ? "" : "hidden"}`}>
                <a className="block py-2 text-sm hover:bg-gray-200 text-center" href="#">Home</a>
                <a className="block py-2 text-sm hover:bg-gray-200 text-center" href="#">DI</a>
                <a className="block py-2 text-sm hover:bg-gray-200 text-center" href="#">Projects</a>
                <a className="block py-2 text-sm hover:bg-gray-200 text-center" href="#">Contact</a>
                <a className="block py-2 text-sm hover:bg-gray-200 text-center" href="#">Login</a>
            </div>
        </nav>
    );
}



export default NavBar;


