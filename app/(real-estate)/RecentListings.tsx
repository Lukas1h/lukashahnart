import ListingCard, { type SiteListing } from "./ListingCard";

// Picked in LeadFinder (Portfolio settings → Website listings); with none
// picked it sends the three newest finished jobs. Served from LeadFinder's
// own host, like the agent pages this site forwards.
const SITE_LISTINGS_URL = "https://r.lukashahn.media/api/site-listings";

async function getListings(): Promise<SiteListing[]> {
    try {
        const res = await fetch(SITE_LISTINGS_URL, { next: { revalidate: 300 } });
        if (!res.ok) return [];
        return ((await res.json()) as { listings: SiteListing[] }).listings ?? [];
    } catch {
        return [];
    }
}

/** Recent listings from LeadFinder — the same cards as its agent pages. Nothing at all when there are none or it can't be reached. */
export default async function RecentListings() {
    const listings = await getListings();
    if (listings.length === 0) return null;
    return (
        <section id="listings" className="w-full scroll-mt-24 bg-white px-4 pb-20 md:pb-28">
            <div className="mx-auto max-w-5xl">
                <p className="mb-3 text-center font-outfit text-xs font-medium uppercase tracking-[0.4em] text-[#995000]">
                    Listings
                </p>
                <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-[#181A1C] md:mb-16 md:text-4xl">
                    Recent Listings
                </h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
                    {listings.map((l) => (
                        <ListingCard key={l.bookingId} listing={l} />
                    ))}
                </div>
            </div>
        </section>
    );
}
