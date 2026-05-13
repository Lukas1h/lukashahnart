import { ReactNode } from "react"
import "./header-nav-link.css"

export default function HeaderNavLink({ href, children }: { href: string, children: ReactNode }) {
    return (
        <>
            <a href={href} className="header-nav-link font-semibold font-outfit tracking-tighter text-[1.9rem]">{children}</a>

        </>

    )
}

