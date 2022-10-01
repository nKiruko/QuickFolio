import Link from "next/link";
import { useState } from "react";
import NavItem from "./NavItem";
import Image from 'next/image'

const NavBar = () => {
    const [mobileNav, setMobileNav] = useState(false)

    function toggleMobile() {
        setMobileNav(!mobileNav)
    }
    
    return(
        <nav className="bg-dinocream">
            <div className="max-w-screen mx-auto pl-10 sm:px-16 lg:px-28">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-1">
                        <Link href="/">
                            <a className="lg:ml-24 py-6 px-11 bg-dinoblack shadow-glow">
                                <Image
                                src="/../public/images/DinoOrange.png"
                                alt="Dino Logo"
                                width={155}
                                height={57}
                                />
                            </a>   
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center space-x-1 font-heading text-2xl text-dinoblack">
                        <NavItem name="Home" href="/" />
                        <NavItem name="DI" href="/" />
                        <NavItem name="Projects" href="/projects" />
                        <NavItem name="Contact" href="/contact" />
                        <Link href="/" passHref>
                            <a className="rounded-full border-2 border-dinoblack px-5  hover:border-tmorange">Login</a>
                        </Link>
                    </div>
                    <div className="lg:hidden flex items-center px-3">
                        <button className="mobile-menu-button " onClick={toggleMobile}>
                            <span className="font-heading text-2xl text-dinoblack">Menu</span>
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