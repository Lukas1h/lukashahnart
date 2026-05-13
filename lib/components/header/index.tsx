import HeaderLogo from "./header-logo";
import HeaderNavLink from "./header-nav-link";
import HeaderCTA from "./header-cta";

export default function Header() {
    return (
        <header className="sticky top-0 z-20 px-8 py-2 flex justify-between items-center h-24 select-none">
            <HeaderLogo />


            <nav className="flex gap-8 items-center select-none">
                <div className="gap-8 items-center  hidden md:flex">
                    <HeaderNavLink href="/#services">Services</HeaderNavLink>
                    <HeaderNavLink href="/#portfolio">Portfolio</HeaderNavLink>
                    <HeaderNavLink href="/#testimonials">Testimonials</HeaderNavLink>
                </div>

                <HeaderCTA />
            </nav>
        </header>
    )
}