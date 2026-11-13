import Image from "next/image";
import Header from "./Header";
import HeroVideo from "./HeroVideo";
import RecentListings from "./RecentListings";

type Photo = { src: string; alt: string };

const photo = (file: string, alt: string): Photo => ({ src: `/real-estate/gallery/${file}.jpg`, alt });

// Full-width photos that open, split, and close the gallery.
const heroPhoto = photo("01", "Dining nook with round wood table, woven pendant light and garden windows");
const middlePhoto = photo("05", "Empty living room with vaulted wood-beam ceiling, arched windows and red rug");
const closingPhotos: Photo[] = [photo("15", "Exterior of olive-green house with brick chimney and two-car garage"), photo("17", "Aerial drone view of house and fenced acreage surrounded by autumn woods")];

// Eight per grid: full rows at two and four columns.
const gridTop: Photo[] = [
    photo("02", "Living room with black tile fireplace, white sofa and large windows"),
    photo("03", "Kitchen with light oak cabinets, navy island and glass globe pendants"),
    photo("04", "Kitchen with black cabinets, black island and sliding door to deck"),
    photo("10", "Empty peach-walled room with arched window and French doors"),
    photo("06", "Empty room with large windows overlooking autumn trees"),
    photo("07", "Kitchen counter detail with light wood cabinets and stainless range hood"),
    photo("08", "Kitchen sink with black faucet below window of red autumn leaves"),
    photo("09", "Bedroom with peach bedding, brass floor lamp and leaning wood mirror"),
];

const gridBottom: Photo[] = [
    photo("11", "Bathroom with wood vanity, marble counter and glass walk-in shower"),
    photo("12", "Empty room with light wood floors and window overlooking a covered deck"),
    photo("13", "Open kitchen and dining space with white cabinets, island and ceiling fan"),
    photo("14", "Empty bedroom with wood floors and window framing autumn hillside views"),
    photo("19", "Aerial drone view of house in autumn woods with mountains beyond"),
    photo("16", "Exterior of sage green ranch house with white garage door and lawn"),
    photo("20", "Covered patio with wood pergola roof, stone columns and fenced garden"),
    photo("18", "Exterior of gray-green house with covered porch and leaf-covered yard"),
];

const photoAlt = (alt: string) => `${alt} — real estate photography by Hahn Media, Oregon`;

function FeaturePhoto({ photo, priority = false }: { photo: Photo; priority?: boolean }) {
    return (
        <div className="relative aspect-[3/2] w-full overflow-hidden">
            <Image
                src={photo.src}
                alt={photoAlt(photo.alt)}
                fill
                priority={priority}
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
            />
        </div>
    );
}

function PhotoGrid({ photos }: { photos: Photo[] }) {
    return (
        <div className="my-2 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {photos.map((p) => (
                <div key={p.src} className="relative aspect-[3/2] overflow-hidden">
                    <Image
                        src={p.src}
                        alt={photoAlt(p.alt)}
                        fill
                        sizes="(min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    );
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.lukashahn.art/#business",
    name: "Hahn Media",
    description:
        "Real estate photography, cinematic walkthrough video, drone photography, and floor plans for agents in Eugene and Roseburg, Oregon.",
    url: "https://www.lukashahn.art",
    image: "https://www.lukashahn.art/real-estate/gallery/01.jpg",
    email: "lukas@lukashahn.art",
    telephone: "+1-541-430-3372",
    priceRange: "$300–$700",
    founder: { "@type": "Person", name: "Lukas Hahn" },
    hasMap: "https://maps.google.com/?cid=15332850986364745694",
    sameAs: ["https://maps.google.com/?cid=15332850986364745694"],
    address: {
        "@type": "PostalAddress",
        addressLocality: "Roseburg",
        addressRegion: "OR",
        addressCountry: "US",
    },
    areaServed: [
        { "@type": "City", name: "Eugene, Oregon" },
        { "@type": "City", name: "Roseburg, Oregon" },
    ],
    makesOffer: [
        { name: "Interior / Exterior Photography", price: "300" },
        { name: "Walkthrough Video", price: "400" },
        { name: "Photography & Walkthrough Video", price: "700" },
    ].map(({ name, price }) => ({
        "@type": "Offer",
        price,
        priceCurrency: "USD",
        itemOffered: { "@type": "Service", name, serviceType: "Real estate photography and video" },
    })),
};

export default function Home() {
    return (
        <div id="top" className="min-h-screen flex flex-col font-sans bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
                }}
            />
            <Header />

            {/* Cinematic headline */}
            <section className="w-full px-4 pt-32 pb-8 text-center md:pt-40">
                <h1 className="mb-3 font-outfit text-xs font-medium uppercase tracking-[0.4em] text-[#995000]">
                    Real Estate Photography &amp; Video in Eugene &amp; Roseburg, Oregon
                </h1>
                <p className="mx-auto max-w-2xl font-heading text-3xl font-bold leading-tight tracking-tight text-[#D67F1F] md:text-4xl">
                    Cinematic media that sells listings quicker.
                </p>
                <div className="mx-auto mt-4 h-[2px] w-11 bg-[#995000]" />
            </section>

            {/* Featured Video */}
            <section className="relative z-10 px-4">
                <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden border border-[#181A1C]/10 shadow-xl shadow-black/10">
                    <HeroVideo videoId="NVY-MTRMcPA" title="Summit Sky" />
                </div>
            </section>

            {/* Featured in Eugene */}
            <section className="w-full px-4 pt-8 pb-4">
                <p className="flex items-center justify-center gap-3 text-center font-outfit text-xs font-medium uppercase tracking-[0.2em] text-[#995000] sm:text-sm">
                    <span className="h-[5px] w-[5px] flex-shrink-0 bg-[#D67F1F]" />
                    Featured in the Eugene Tour of Homes
                    <span className="h-[5px] w-[5px] flex-shrink-0 bg-[#D67F1F]" />
                </p>
            </section>

            {/* Photo Portfolio */}
            <section id="portfolio" className="w-full scroll-mt-24 bg-white px-4 pt-16 pb-20 md:pb-28">
                <div className="mx-auto max-w-5xl">
                    <p className="mb-3 text-center font-outfit text-xs font-medium uppercase tracking-[0.4em] text-[#995000]">
                        Portfolio
                    </p>
                    <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-[#181A1C] md:mb-16 md:text-4xl">
                        Photo Portfolio
                    </h2>
                    <FeaturePhoto photo={heroPhoto} priority />
                    <PhotoGrid photos={gridTop} />
                    <FeaturePhoto photo={middlePhoto} />
                    <PhotoGrid photos={gridBottom} />
                    {closingPhotos.map((p, i) => (
                        <div key={p.src} className={i > 0 ? "mt-2" : undefined}>
                            <FeaturePhoto photo={p} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Recent Listings (from LeadFinder) */}
            <RecentListings />

            {/* More Videos */}
            <section className="w-full bg-[#F9F4F1] pt-16 px-4 pb-20 md:pb-28">
                <div className="mx-auto max-w-4xl">
                    <p className="mb-3 text-center font-outfit text-xs font-medium uppercase tracking-[0.4em] text-[#995000]">
                        Video
                    </p>
                    <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-[#181A1C] md:mb-16 md:text-4xl">
                        More Videos
                    </h2>
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                        <div>
                            <div className="relative aspect-video overflow-hidden border border-[#181A1C]/10">
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/pYjeklEaM8U"
                                    title="Timberline Hills"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 h-full w-full"
                                />
                            </div>
                            <h3 className="mt-4 font-heading text-xl font-bold text-[#181A1C]">Timberline Hills</h3>
                            <p className="mt-1 font-outfit text-xs uppercase tracking-[0.2em] text-[#181A1C]/60">Eugene Oregon</p>
                        </div>
                        <div>
                            <div className="relative aspect-video overflow-hidden border border-[#181A1C]/10">
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/NVY-MTRMcPA"
                                    title="Summit Sky"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 h-full w-full"
                                />
                            </div>
                            <h3 className="mt-4 font-heading text-xl font-bold text-[#181A1C]">Summit Sky</h3>
                            <p className="mt-1 font-outfit text-xs uppercase tracking-[0.2em] text-[#181A1C]/60">Eugene Oregon</p>
                        </div>
                        <div>
                            <div className="relative aspect-video overflow-hidden border border-[#181A1C]/10">
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/peNBeuqA410"
                                    title="Arline Way"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 h-full w-full"
                                />
                            </div>
                            <h3 className="mt-4 font-heading text-xl font-bold text-[#181A1C]">Arline Way</h3>
                            <p className="mt-1 font-outfit text-xs uppercase tracking-[0.2em] text-[#181A1C]/60">Eugene Oregon</p>
                        </div>
                        <div>
                            <div className="relative aspect-video overflow-hidden border border-[#181A1C]/10">
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/gB_GGJD2IMQ"
                                    title="Woodland Drive"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 h-full w-full"
                                />
                            </div>
                            <h3 className="mt-4 font-heading text-xl font-bold text-[#181A1C]">Woodland Drive</h3>
                            <p className="mt-1 font-outfit text-xs uppercase tracking-[0.2em] text-[#181A1C]/60">Roseburg Oregon</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="w-full scroll-mt-24 bg-white px-4 pt-16 pb-20 md:pb-28 md:pt-20">
                <div className="mx-auto max-w-2xl">
                    <p className="mb-3 text-center font-outfit text-xs font-medium uppercase tracking-[0.4em] text-[#995000]">
                        Services
                    </p>
                    <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-[#181A1C] md:mb-16 md:text-4xl">
                        Services
                    </h2>

                    <div className="flex flex-col gap-4">
                        {[
                            "Interior & Exterior Photography",
                            "Drone / Aerial Photography",
                            "Cinematic Walkthrough Video",
                            "Social Media Reels",
                            "Floor Plans",
                        ].map((service) => (
                            <div key={service} className="flex items-baseline gap-3">
                                <span className="h-[6px] w-[6px] flex-shrink-0 bg-[#D67F1F]" />
                                <span className="font-outfit text-base text-[#181A1C] sm:text-lg">{service}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 bg-[#F9F4F1] px-5 py-4">
                        <p className="font-outfit text-sm text-[#181A1C] sm:text-base">Photos delivered in 24 hours.</p>
                    </div>

                    <p className="mt-12 mb-3 text-center font-outfit text-xs font-medium uppercase tracking-[0.4em] text-[#995000]">
                        Pricing
                    </p>
                    <div className="divide-y divide-[#181A1C]/15 border-y border-[#181A1C]/15">
                        <div className="flex items-start justify-between gap-8 py-8">
                            <div>
                                <p className="font-outfit text-lg text-[#181A1C]">Interior / Exterior Photography</p>
                                <p className="mt-2 font-outfit text-xs uppercase tracking-[0.15em] text-[#181A1C]/60">+$100 Aerial Drone Footage</p>
                            </div>
                            <p className="whitespace-nowrap font-heading text-2xl font-bold text-[#181A1C]">$300</p>
                        </div>
                        <div className="flex items-start justify-between gap-8 py-8">
                            <div>
                                <p className="font-outfit text-lg text-[#181A1C]">Walkthrough Video</p>
                                <p className="mt-2 font-outfit text-xs uppercase tracking-[0.15em] text-[#181A1C]/60">+$100 Social Media Edit</p>
                            </div>
                            <p className="whitespace-nowrap font-heading text-2xl font-bold text-[#181A1C]">$400</p>
                        </div>
                        <div className="flex items-start justify-between gap-8 py-8">
                            <div>
                                <p className="font-outfit text-lg text-[#181A1C]">Photography &amp; Walkthrough Video</p>
                                <p className="mt-2 font-outfit text-xs uppercase tracking-[0.15em] text-[#181A1C]/60">Including Drone &amp; Social</p>
                            </div>
                            <p className="whitespace-nowrap font-heading text-2xl font-bold text-[#181A1C]">$700</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Did You Know */}
            <section className="w-full bg-[#F9F4F1] px-4 py-20 md:py-28">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-3 text-center font-outfit text-xs font-medium uppercase tracking-[0.4em] text-[#995000]">
                        Did You Know
                    </p>
                    <p className="mx-auto max-w-xl text-center font-heading text-lg italic leading-relaxed text-[#181A1C] md:text-xl">
                        Buyers decide whether to walk through the door before they ever leave their couch.
                        <br />
                        Your photos and video are the gatekeeper.
                    </p>
                    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
                        <div className="text-center sm:border-r sm:border-[#181A1C]/15 sm:px-4">
                            <p className="font-heading text-4xl font-bold text-[#D67F1F]">3 wks</p>
                            <p className="mt-2 font-outfit text-sm text-[#181A1C]/75">
                                faster sale on homes $400K+ with professional photos
                            </p>
                        </div>
                        <div className="text-center sm:border-r sm:border-[#181A1C]/15 sm:px-4">
                            <p className="font-heading text-4xl font-bold text-[#D67F1F]">63%</p>
                            <p className="mt-2 font-outfit text-sm text-[#181A1C]/75">
                                of buyers skip listings with poor-quality photos
                            </p>
                        </div>
                        <div className="text-center sm:px-4">
                            <p className="font-heading text-4xl font-bold text-[#D67F1F]">403%</p>
                            <p className="mt-2 font-outfit text-sm text-[#181A1C]/75">
                                more inquiries on listings with video
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="w-full scroll-mt-24 bg-white px-4 pb-24 pt-16 md:pb-32 md:pt-20">
                <div className="mx-auto max-w-4xl">
                    <p className="mb-3 text-center font-outfit text-xs font-medium uppercase tracking-[0.4em] text-[#995000]">
                        Get In Touch
                    </p>
                    <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-[#D67F1F] md:mb-16 md:text-4xl">
                        Reach out to book your shoot.
                    </h2>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
                        <div>
                            <p className="font-outfit text-lg text-[#181A1C]">
                                Whether you need photography, a walkthrough video, or a full package with drone and social edits, I&rsquo;d love to hear about your property.
                            </p>

                            <div className="mt-10 divide-y divide-[#181A1C]/15 border-y border-[#181A1C]/15">
                                <div className="flex items-baseline justify-between gap-6 py-5">
                                    <p className="font-outfit text-xs uppercase tracking-[0.2em] text-[#181A1C]/60">Email</p>
                                    <a href="mailto:lukas@lukashahn.art" className="font-outfit text-[#181A1C] transition hover:text-[#D67F1F]">lukas@lukashahn.art</a>
                                </div>
                                <div className="flex items-baseline justify-between gap-6 py-5">
                                    <p className="font-outfit text-xs uppercase tracking-[0.2em] text-[#181A1C]/60">Phone</p>
                                    <a href="tel:+15414303372" className="font-outfit text-[#181A1C] transition hover:text-[#D67F1F]">+1 541 430 3372</a>
                                </div>
                                <div className="flex items-baseline justify-between gap-6 py-5">
                                    <p className="font-outfit text-xs uppercase tracking-[0.2em] text-[#181A1C]/60">Location</p>
                                    <p className="font-outfit text-[#181A1C]">Roseburg &amp; Eugene, Oregon</p>
                                </div>
                                <div className="flex items-baseline justify-between gap-6 py-5">
                                    <p className="font-outfit text-xs uppercase tracking-[0.2em] text-[#181A1C]/60">Reviews</p>
                                    <a href="https://maps.app.goo.gl/WMhhHxSnYozHLfBP8" target="_blank" rel="noopener" className="font-outfit text-[#181A1C] transition hover:text-[#D67F1F]">Google</a>
                                </div>
                            </div>
                        </div>

                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="flex flex-col gap-5"
                        >
                            <input
                                type="hidden"
                                name="access_key"
                                value="76fb51e4-bfef-47ce-87c7-d8862570713a"
                            />
                            <input type="hidden" name="subject" value="New Submission" />
                            <input type="hidden" name="redirect" value="https://lukashahn.art/thanks" />

                            <div>
                                <label className="mb-1 block font-outfit text-xs uppercase tracking-[0.2em] text-[#181A1C]/60">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    className="w-full border border-[#181A1C]/15 bg-transparent px-4 py-3 font-outfit text-[#181A1C] placeholder:text-[#181A1C]/40 outline-none transition focus:border-[#D67F1F]"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block font-outfit text-xs uppercase tracking-[0.2em] text-[#181A1C]/60">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    className="w-full border border-[#181A1C]/15 bg-transparent px-4 py-3 font-outfit text-[#181A1C] placeholder:text-[#181A1C]/40 outline-none transition focus:border-[#D67F1F]"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block font-outfit text-xs uppercase tracking-[0.2em] text-[#181A1C]/60">
                                    Project Details
                                </label>
                                <textarea
                                    name="message"
                                    placeholder="Tell me a little about your project..."
                                    required
                                    rows={5}
                                    className="w-full resize-none border border-[#181A1C]/15 bg-transparent px-4 py-3 font-outfit text-[#181A1C] placeholder:text-[#181A1C]/40 outline-none transition focus:border-[#D67F1F]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-2 border border-[#181A1C] px-8 py-4 font-outfit text-xs font-medium uppercase tracking-[0.3em] text-[#181A1C] transition hover:bg-[#181A1C] hover:text-white"
                            >
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
