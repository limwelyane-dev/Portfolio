import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle";
import Profile from "/src/assets/limProfile.png"

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"}
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-40 transition-all duration-300 ${
                isScrolled
                ? "py-3 bg-background"
                : "py-5"
            }`}
            >

            <div className="container flex items-center justify-between">
                <div className="flex flex-row gap-2 rounded-2xl">
                    <img src={Profile} alt="Profile" className="w-10 h-10 rounded-2xl"/>
                    <a className="text-xl font-bold text-primary flex items-center" href="#about">
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">Limwel</span>{" "}Portfolio
                        </span>
                    </a>
                </div>

                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                <div>
                    <ThemeToggle />

                    <button onClick={() => setIsMenuOpen((prev) => !prev)} className="relative md:hidden p-2 text-foreground z-50 cursor-pointer" aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>{isMenuOpen ? <X size={25} /> : <Menu size={24} />}</button>

                    <div className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                        <div className="flex flex-col space-y-8 text-xl">
                            {navItems.map((item, key) => (
                                <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </nav>
    );
}