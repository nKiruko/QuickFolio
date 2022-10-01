import Link from "next/link";
import { useState } from "react";
import NavItem from "./NavItem";

const NavBar = () => {
    const [mobileNav, setMobileNav] = useState(false)

    function toggleMobile() {
        setMobileNav(!mobileNav)
    }
    
    return(
        <nav className="bg-gray-100">
            <div className="max-w-screen mx-auto px-3">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-1">
                        <Link href="/">
                            <a className="py-5 pl-16">Digital Innovation</a>   
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <NavItem name="Home" href="/" />
                        <NavItem name="DI" href="/" />
                        <NavItem name="Projects" href="/" />
                        <NavItem name="Contact" href="/contact" />
                        <Link href="/" passHref>
                            <a className="rounded-full border-2 border-black px-5">Login</a>
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center px-3">
                        <button className="mobile-menu-button" onClick={toggleMobile}>
                            <span>Menu</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`mobile-menu ${mobileNav ? "" : "hidden"}`}>
                <NavItem name="Home" href="/" mobile={true} />
                <NavItem name="DI" href="/" mobile={true} />
                <NavItem name="Projects" href="/" mobile={true} />
                <NavItem name="Contact" href="/contact" mobile={true} />
                <NavItem name="Login" href="/" mobile={true} />
            </div>
        </nav>
    );
}

export default NavBar;