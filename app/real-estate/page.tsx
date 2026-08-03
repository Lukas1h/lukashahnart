import Image from "next/image";
import Header from "./Header";

export default function Home() {
    return (
        <div id="top" className="min-h-screen flex flex-col font-sans bg-[#181A1C]">
            <Header />

            {/* Hero */}
            <section className="relative w-full overflow-hidden h-[580px] ">
                <Image
                    src="/bg.jpg"
                    alt="Modern real estate exterior"
                    fill
                    priority
                    sizes="100vw"
                    className="scale-105 object-cover contrast-[1.05] saturate-[0.92]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
                <div className="absolute inset-0 [background:radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0)_70%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">
                    <h1 className="font-heading font-bold tracking-tight text-[#F9F4F1] text-7xl leading-12">
                        Hahn Media
                    </h1>
                    <p className="font-outfit font-medium text-[#F9F4F1] text-xs sm:text-sm uppercase tracking-[0.4em]">
                        High-end Real Estate Media
                    </p>
                </div>
            </section>

            {/* Featured Video */}
            <section className="relative z-10 -mt-20 px-4 sm:-mt-28 md:-mt-32">
                <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                    <iframe
                        src="https://www.youtube-nocookie.com/embed/pYjeklEaM8U?autoplay=1&mute=1&loop=1&playlist=pYjeklEaM8U&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&playsinline=1"
                        title="Southview Drive"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        className="pointer-events-none absolute inset-0 h-full w-full"
                    />
                </div>
            </section>

            {/* Services */}
            <section id="services" className="w-full scroll-mt-24 bg-[#181A1C] px-4 pb-20 pt-16 md:pb-28 md:pt-20">
                <div className="mx-auto max-w-2xl">
                    <p className="mb-3 text-center font-outfit text-xs font-medium uppercase tracking-[0.4em] text-[#F9F4F1]">
                        Pricing
                    </p>
                    <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-[#F9F4F1] md:mb-16 md:text-4xl">
                        Services
                    </h2>
                    <div className="divide-y divide-white/15 border-y border-white/15">
                        <div className="flex items-start justify-between gap-8 py-8">
                            <div>
                                <p className="font-outfit text-lg text-[#F9F4F1]">Interior / Exterior Photography</p>
                                <p className="mt-2 font-outfit text-xs uppercase tracking-[0.15em] text-[#F9F4F1]">+$100 Aerial Drone Footage</p>
                            </div>
                            <p className="whitespace-nowrap font-heading text-2xl font-bold text-[#F9F4F1]">$300</p>
                        </div>
                        <div className="flex items-start justify-between gap-8 py-8">
                            <div>
                                <p className="font-outfit text-lg text-[#F9F4F1]">Walkthrough Video</p>
                                <p className="mt-2 font-outfit text-xs uppercase tracking-[0.15em] text-[#F9F4F1]">+$100 Social Media Edit</p>
                            </div>
                            <p className="whitespace-nowrap font-heading text-2xl font-bold text-[#F9F4F1]">$400</p>
                        </div>
                        <div className="flex items-start justify-between gap-8 py-8">
                            <div>
                                <p className="font-outfit text-lg text-[#F9F4F1]">Photography &amp; Walkthrough Video</p>
                                <p className="mt-2 font-outfit text-xs uppercase tracking-[0.15em] text-[#F9F4F1]">Including Drone &amp; Social</p>
                            </div>
                            <p className="whitespace-nowrap font-heading text-2xl font-bold text-[#F9F4F1]">$700</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* More Videos */}
            <section id="portfolio" className="w-full scroll-mt-24 bg-[#181A1C] px-4 pb-20 md:pb-28">
                <div className="mx-auto max-w-4xl">
                    <p className="mb-3 text-center font-outfit text-xs font-medium uppercase tracking-[0.4em] text-[#F9F4F1]">
                        Portfolio
                    </p>
                    <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-[#F9F4F1] md:mb-16 md:text-4xl">
                        More Videos
                    </h2>
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                        <div>
                            <div className="relative aspect-video overflow-hidden border border-white/10">
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/peNBeuqA410"
                                    title="Arline Way"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 h-full w-full"
                                />
                            </div>
                            <h3 className="mt-4 font-heading text-xl font-bold text-[#F9F4F1]">Arline Way</h3>
                            <p className="mt-1 font-outfit text-xs uppercase tracking-[0.2em] text-[#F9F4F1]">Eugene Oregon</p>
                        </div>
                        <div>
                            <div className="relative aspect-video overflow-hidden border border-white/10">
                                <iframe
                                    src="https://www.youtube-nocookie.com/embed/gB_GGJD2IMQ"
                                    title="Woodland Drive"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 h-full w-full"
                                />
                            </div>
                            <h3 className="mt-4 font-heading text-xl font-bold text-[#F9F4F1]">Woodland Drive</h3>
                            <p className="mt-1 font-outfit text-xs uppercase tracking-[0.2em] text-[#F9F4F1]">Roseburg Oregon</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="w-full scroll-mt-24 bg-[#181A1C] px-4 pb-24 pt-16 md:pb-32 md:pt-20">
                <div className="mx-auto max-w-4xl">
                    <p className="mb-3 text-center font-outfit text-xs font-medium uppercase tracking-[0.4em] text-[#F9F4F1]">
                        Get In Touch
                    </p>
                    <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-[#F9F4F1] md:mb-16 md:text-4xl">
                        Contact
                    </h2>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
                        <div>
                            <p className="font-outfit text-lg text-[#F9F4F1]">
                                Whether you need photography, a walkthrough video, or a full package with drone and social edits, I&rsquo;d love to hear about your property.
                            </p>

                            <div className="mt-10 divide-y divide-white/15 border-y border-white/15">
                                <div className="flex items-baseline justify-between gap-6 py-5">
                                    <p className="font-outfit text-xs uppercase tracking-[0.2em] text-[#F9F4F1]">Email</p>
                                    <p className="font-outfit text-[#F9F4F1]">lukas@lukashahn.art</p>
                                </div>
                                <div className="flex items-baseline justify-between gap-6 py-5">
                                    <p className="font-outfit text-xs uppercase tracking-[0.2em] text-[#F9F4F1]">Phone</p>
                                    <p className="font-outfit text-[#F9F4F1]">+1 541 430 3372</p>
                                </div>
                                <div className="flex items-baseline justify-between gap-6 py-5">
                                    <p className="font-outfit text-xs uppercase tracking-[0.2em] text-[#F9F4F1]">Location</p>
                                    <p className="font-outfit text-[#F9F4F1]">Roseburg &amp; Eugene, Oregon</p>
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
                                <label className="mb-1 block font-outfit text-xs uppercase tracking-[0.2em] text-[#F9F4F1]">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                    className="w-full border border-white/15 bg-transparent px-4 py-3 font-outfit text-[#F9F4F1] placeholder:text-[#F9F4F1]/50 outline-none transition focus:border-[#F9F4F1]"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block font-outfit text-xs uppercase tracking-[0.2em] text-[#F9F4F1]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    className="w-full border border-white/15 bg-transparent px-4 py-3 font-outfit text-[#F9F4F1] placeholder:text-[#F9F4F1]/50 outline-none transition focus:border-[#F9F4F1]"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block font-outfit text-xs uppercase tracking-[0.2em] text-[#F9F4F1]">
                                    Project Details
                                </label>
                                <textarea
                                    name="message"
                                    placeholder="Tell me a little about your project..."
                                    required
                                    rows={5}
                                    className="w-full resize-none border border-white/15 bg-transparent px-4 py-3 font-outfit text-[#F9F4F1] placeholder:text-[#F9F4F1]/50 outline-none transition focus:border-[#F9F4F1]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-2 border border-[#F9F4F1] px-8 py-4 font-outfit text-xs font-medium uppercase tracking-[0.3em] text-[#F9F4F1] transition hover:bg-[#F9F4F1] hover:text-[#181A1C]"
                            >
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {false && (
                <>
                    {/* Featured Videos Section */}
                    <section className="bg-[#181A1C] w-full py-16 md:py-24">
                        <div className="max-w-4xl mx-auto px-4">
                            <h2 className="font-outfit font-semibold text-[2.2rem] md:text-[3rem] text-[#F9F4F1] tracking-tight text-center md:mb-8">Featured Videos</h2>
                            {/* Video cards */}
                            <div className="flex flex-col gap-10">
                                {/* Card 1 */}
                                <div className="flex flex-col md:flex-row items-stretch gap-6">
                                    <div className="md:w-1/2">
                                        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                                            <iframe
                                                src="https://www.youtube-nocookie.com/embed/pYjeklEaM8U"
                                                title="Featured Property Tour"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 flex items-center">
                                        <div className="h-full w-full">
                                            <h3 className="font-heading text-3xl text-[#D18601] font-bold">Southview Drive</h3>
                                            <h4 className="-mt-1 font-outfit text-lg text-[#F9F4F1]/60 mb-2 tracking-tight font-medium">Eugene Oregon</h4>
                                            <p className="font-outfit text-[#F9F4F1]/80 md:text-lg">
                                                Luxiurous, brand-new development with four bed, four bath, and two car garage.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row-reverse items-stretch gap-6">
                                    <div className="md:w-1/2">
                                        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                                            <iframe
                                                src="https://www.youtube-nocookie.com/embed/peNBeuqA410"
                                                title="Featured Property Tour"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 flex items-center">
                                        <div className="h-full w-full">
                                            <h3 className="font-heading text-3xl text-[#D18601] font-bold">Arline Way</h3>
                                            <h4 className="-mt-1 font-outfit text-lg text-[#F9F4F1]/60 mb-2 tracking-tight font-medium">Eugene Oregon</h4>
                                            <p className="font-outfit text-[#F9F4F1]/80 md:text-lg">
                                                Nestled deep in the trees, but still only five minutes from town.
                                            </p>
                                            <p className="font-outfit text-[#F9F4F1]/80 md:text-lg">
                                                Imagine waking in the morning and looking out at this view, without even getting out of bed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Card 2 - alternate layout on md+ */}
                                <div className="flex flex-col md:flex-row items-stretch gap-6">
                                    <div className="md:w-1/2">
                                        <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                                            <iframe
                                                src="https://www.youtube-nocookie.com/embed/gB_GGJD2IMQ"
                                                title="Neighborhood Spotlight"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="w-full h-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 flex items-center">
                                        <div className="h-full w-full">
                                            <h3 className="font-heading text-3xl text-[#D18601] font-bold">Woodland Drive</h3>
                                            <h4 className="-mt-1 font-outfit text-lg text-[#F9F4F1]/60 mb-2 tracking-tight font-medium">Roseburg Oregon</h4>
                                            <p className="font-outfit text-[#F9F4F1]/80 md:text-lg">
                                                What a view! This gorgeous property overlooks Abacela Vineyards in Winston.
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </section>

                    <div className="w-full bg-[#181A1C]">
                        <div className="max-w-4xl h-full mx-auto p-4">

                            <div className="py-20">
                                <div className="-mt-40 mb-40 h-0" id="testimonials"></div>
                                <h2 className="font-outfit font-semibold text-[#F9F4F1] tracking-tight text-center text-[2.4rem] leading-12 md:leading-18 md:text-[4rem]">Testimonials</h2>
                                <h3 className="font-outfit font-medium text-[#F9F4F1]/70 tracking-tight text-[1.4rem] leading-6 md:leading-10 md:text-[2.3rem] text-center">
                                    Read what others have to say about my work.
                                </h3>
                            </div>

                            <div className="flex flex-col items-center">
                                <p className="max-w-2xl text-center font-outfit text-[#F9F4F1]/90 text-xl leading-6  md:text-2xl md:leading-7 italic">
                                    &ldquo;Lukas designed our school website and the process was wonderful.
                                    He listened carefully to our needs, creatively suggested solutions,
                                    and quickly provided exactly what we needed. If you need a website, blog,
                                    or custom solution, I wholeheartedly recommend Lukas Hahn&rdquo;
                                </p>
                                <p className="font-outfit text-[#F9F4F1]/70 text-[1.2rem] mt-4 text-center leading-4">—<span className="font-semibold text-[#F9F4F1] text-xl">Mark Vickers Ph.D.</span><br />Former Principal, Calvary Christian Academy</p>
                            </div>


                            <div className="flex flex-col items-center  pt-20">
                                <p className="max-w-2xl text-center font-outfit text-[#F9F4F1]/90 text-xl leading-6 md:text-2xl md:leading-7 italic">
                                    &ldquo;I highly recommend Lukas and his services. He is professional, creative, and truly passionate about what he does.
                                    With clear communication, attention to detail, and dedication, he made the entire experience smooth and enjoyable.
                                    He was bold with suggestions and humble to hear vision. He went above and beyond to meet my business needs,
                                    and the final results exceeded expectations.
                                    He continues to be supportive with services he offers for our business ongoing.&rdquo;
                                </p>
                                <p className="font-outfit text-[#F9F4F1]/70 text-[1.2rem] mt-4 text-center leading-4">—<span className="font-semibold text-[#F9F4F1] text-xl">Amber Hahn</span><br />Owner of Golden Morning Flower Farm in Roseburg.</p>
                            </div>


                            <div className="flex flex-col items-center  pt-20">
                                <p className="max-w-2xl text-center font-outfit text-[#F9F4F1]/90 text-xl leading-6  md:text-2xl md:leading-7 italic">
                                    &ldquo;Lukas has done an excellent job for me every time I needed video content
                                    for my social media and branding for my music project. He is always a good
                                    hang, collaborative, creative, and gets high quality content done in a timely
                                    fashion.&rdquo;
                                </p>
                                <p className="font-outfit text-[#F9F4F1]/70 text-[1.2rem] mt-4 text-center leading-4">—<span className="font-semibold text-[#F9F4F1] text-xl">Brandon Plumblee</span><br />Artist, songwriter and musician from Roseburg.</p>
                            </div>



                        </div>



                    </div>

                    <div className="w-full bg-[#181A1C]">
                        <div className="max-w-4xl h-full mx-auto p-4 pb-32">

                            <div className="pt-20 pb-8">
                                <div className="-mt-40 mb-40 h-0" id="contact"></div>
                                <h2 className="font-outfit font-semibold text-[#F9F4F1] tracking-tight text-center text-[2.4rem] leading-12 md:leading-18 md:text-[4rem]">
                                    Contact
                                </h2>

                            </div>

                            <div className="bg-[#1F2123] rounded-[2rem] p-8 md:p-12 flex flex-col-reverse md:flex-row gap-10 border border-white/10">

                                <div className="flex-1">
                                    <p className="text-[#D18601] font-semibold uppercase tracking-[0.2em] font-outfit text-sm mb-3  hidden md:block">
                                        Get In Touch
                                    </p>

                                    <h3 className="text-[2.5rem] leading-9 font-semibold tracking-tight text-[#F9F4F1] font-outfit mb-4 hidden md:block">
                                        Ready to build something professional?
                                    </h3>

                                    <p className="text-lg font-outfit text-[#F9F4F1]/70 max-w-md  hidden md:block">
                                        Whether you need a custom website, social media content, business photography, or video production, I’d love to hear about your project.
                                    </p>

                                    <div className="flex flex-col gap-2 mt-10 font-outfit text-lg text-center md:text-left">
                                        <div>
                                            <p className="text-sm text-[#F9F4F1]/50">
                                                Email
                                            </p>
                                            <p className="font-medium text-[#F9F4F1]">lukas@lukashahn.art</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-[#F9F4F1]/50">
                                                Phone
                                            </p>
                                            <p className="font-medium text-[#F9F4F1]">
                                                +1 541 430 3372
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-sm text-[#F9F4F1]/50">
                                                Location
                                            </p>
                                            <p className="font-medium text-[#F9F4F1]">Roseburg & Eugene, Oregon</p>
                                        </div>


                                    </div>
                                </div>

                                <div className="flex-1">
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
                                        <input type="hidden" name="redirect" value="https://lukashahn.art/thanks"></input>

                                        <div>
                                            <label className="block text-sm font-outfit text-[#F9F4F1]/60 mb-1">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Your name"
                                                required
                                                className="w-full rounded-md bg-[#181A1C] text-[#F9F4F1] placeholder:text-[#F9F4F1]/40 px-5 py-4 font-outfit text-lg outline-none border-2 border-white/10 focus:border-[#D18601] transition"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-outfit text-[#F9F4F1]/60 mb-1">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="you@example.com"
                                                required
                                                className="w-full rounded-md bg-[#181A1C] text-[#F9F4F1] placeholder:text-[#F9F4F1]/40 px-5 py-4 font-outfit text-lg outline-none border-2 border-white/10 focus:border-[#D18601] transition"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-outfit text-[#F9F4F1]/60 mb-1">
                                                Project Details
                                            </label>
                                            <textarea
                                                name="message"
                                                placeholder="Tell me a little about your project..."
                                                required
                                                rows={6}
                                                className="w-full rounded-md bg-[#181A1C] text-[#F9F4F1] placeholder:text-[#F9F4F1]/40 px-5 py-4 font-outfit text-lg outline-none border-2 border-white/10 focus:border-[#D18601] transition resize-none"
                                            />
                                        </div>

                                        <button className="bg-[#D18601] text-[#181A1C] rounded-2xl px-8 py-4 text-xl font-outfit hover:opacity-90 transition w-full font-semibold">
                                            Send Inquiry
                                        </button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            )}
        </div>
    );
}