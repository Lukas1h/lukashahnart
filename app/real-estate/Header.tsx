"use client";

import { useState } from "react";

const links = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#181A1C]/70 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
                <a href="#top" className="flex flex-col leading-none">
                    <span className="font-heading text-2xl font-bold tracking-tight text-[#F9F4F1] sm:text-3xl">
                        Hahn Media
                    </span>
                    <span className="mt-0.5 font-outfit text-[10px] font-medium uppercase tracking-[0.35em] text-[#F9F4F1] sm:text-xs">
                        High-End Real Estate Media
                    </span>
                </a>

                <nav className="hidden items-center gap-10 sm:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="font-outfit text-sm font-medium uppercase tracking-[0.2em] text-[#F9F4F1] transition hover:opacity-60"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                    className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
                >
                    <span className={`h-px w-6 bg-[#F9F4F1] transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
                    <span className={`h-px w-6 bg-[#F9F4F1] transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
                </button>
            </div>

            {open && (
                <nav className="flex flex-col border-t border-white/10 px-4 pb-6 sm:hidden">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="py-3 font-outfit text-sm font-medium uppercase tracking-[0.2em] text-[#F9F4F1]"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
