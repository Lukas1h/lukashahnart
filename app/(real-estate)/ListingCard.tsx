"use client";

import { useState } from "react";

/** One "Recent listings" card, as LeadFinder's /api/site-listings sends it. */
export type SiteListing = {
    bookingId: string;
    status: string;
    price: string;
    beds: string;
    baths: string;
    sqft: string;
    type: string;
    address: string;
    city: string;
    agent: string;
    brokerage: string;
    photos: string[];
};

const arrowButton =
    "absolute top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-[22px] border-0 bg-white/90 shadow-[0_1px_4px_rgba(0,0,0,0.2)] hover:bg-white";

/** The same card as on LeadFinder's agent pages: a photo carousel, the badge, price, facts, address and listing agent. */
export default function ListingCard({ listing: l }: { listing: SiteListing }) {
    const [idx, setIdx] = useState(0);
    const n = l.photos.length;
    const step = (dir: number) => setIdx((i) => (i + dir + n) % n);
    const facts = [
        l.beds && { value: l.beds, unit: "bd" },
        l.baths && { value: l.baths, unit: "ba" },
        l.sqft && { value: l.sqft, unit: "sqft" },
    ].filter((f): f is { value: string; unit: string } => Boolean(f));

    return (
        <article className="flex flex-col overflow-hidden border border-[#181A1C]/12 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
            <div className="relative aspect-[3/2] bg-[#F9F4F1]">
                {n > 0 && (
                    // eslint-disable-next-line @next/next/no-img-element -- photo served by LeadFinder from the job's gallery
                    <img
                        src={l.photos[idx]}
                        alt={`${l.address} — real estate photography by Hahn Media`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                )}
                {l.status && (
                    <span className="absolute top-3 left-3 bg-white px-2.5 py-[5px] font-outfit text-[11px] font-semibold uppercase tracking-[0.14em] text-[#181A1C]">
                        {l.status}
                    </span>
                )}
                {n > 1 && (
                    <>
                        <span className="absolute top-3 right-3 bg-[#181A1C]/70 px-[9px] py-[5px] font-outfit text-xs font-medium text-white">
                            {idx + 1} / {n}
                        </span>
                        <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className={`${arrowButton} left-2.5`}>
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#181A1C" strokeWidth="1.8">
                                <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button type="button" onClick={() => step(1)} aria-label="Next photo" className={`${arrowButton} right-2.5`}>
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#181A1C" strokeWidth="1.8">
                                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
                            {l.photos.map((p, i) => (
                                <span key={p} className={`h-[7px] w-[7px] rounded-[4px] ${i === idx ? "bg-white" : "bg-white/50"}`} />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="flex flex-col gap-1.5 px-5 pt-[18px] pb-5 font-outfit">
                {l.price && <div className="font-heading text-[26px] font-bold text-[#181A1C]">{l.price}</div>}
                {(facts.length > 0 || l.type) && (
                    <div className="flex flex-wrap gap-x-3.5 gap-y-1 text-[15px] text-[#181A1C]">
                        {facts.map((f) => (
                            <span key={f.unit}>
                                <b className="font-semibold">{f.value}</b> {f.unit}
                            </span>
                        ))}
                        {l.type && <span className="text-[#181A1C]/70">{l.type}</span>}
                    </div>
                )}
                <div className="text-[15px] leading-[1.4] text-[#181A1C]">{[l.address, l.city].filter(Boolean).join(", ")}</div>
                {(l.agent || l.brokerage) && (
                    <div className="mt-2 border-t border-[#181A1C]/10 pt-3 text-xs uppercase tracking-[0.08em] text-[#181A1C]/68">
                        {[l.agent, l.brokerage].filter(Boolean).join(" · ")}
                    </div>
                )}
            </div>
        </article>
    );
}
