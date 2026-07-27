

import Header from '@/lib/components/header';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col font-sans ">



            {/* Hero */}
            <main className="z-0 h-[70vh] flex items-center justify-center  -mt-24 relative ">


                <div className="flex-col flex-1 items-center justify-center text-center px-6 z-10 max-w-3xl p-4 w-100%">
                    <div className="max-w-screen mx-auto">

                        <p className=" font-extrabold font-crete-round tracking-tighter text-[2.5rem] leading-2 md:text-[4.5rem] md:leading-4 mb-6 text-[#D18601]">lukashahn.art</p>
                        <h2 className="font-semibold  text-[1.2rem] leading-5 md:text-[2.3rem] md:leading-10  text-[#403933] font-outfit tracking-tight ">
                            Real Estate Media in <span className="text-[#D18601]">Oregon</span>.
                        </h2>



                    </div>
                    <div className="flex mt-2 md:mt-4 justify-center gap-[2px] md:gap-2 text-md  md:text-2xl font-outfit">

                        <p>Photography</p>
                        <p >•</p>
                        <p>Videography</p>
                        <p >•</p>
                        <p>Drone</p>
                    </div>
                </div>


                <div className="absolute flex flex-col justify-between inset-0 h-full z-10 pointer-events-none">
                    <div className="absolute top-0 right-0 left-0 h-17.75 bg-[linear-gradient(180deg,#F9F4F1_17.31%,rgba(255,255,255,0)_100%)]"></div>
                    <div className="absolute bottom-0 right-0 left-0 h-17.75 bg-[linear-gradient(0deg,#F9F4F1_17.31%,rgba(255,255,255,0)_100%)]"></div>
                </div>

                <div className="absolute flex flex-col justify-between inset-0 pointer-events-none hero-background">
                    <img src="/dashes-top-desktop.svg" alt="" className="hidden sm:block" />
                    <img src="/dashes-bottom-desktop.svg" alt="" className="hidden sm:block" />
                    <img src="/dashes-top-mobile.svg" alt="" className="block sm:hidden" />
                    <img src="/dashes-bottom-mobile.svg" alt="" className="block sm:hidden" />
                </div>
            </main>



            {/* Featured Videos Section */}
            <section className="bg-[#F2EBE8] w-full py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="font-semibold text-[2.2rem] md:text-[3rem] text-[#403933] font-outfit tracking-tight  text-center md:mb-8">Featured Videos</h2>
                    {/* Video cards */}
                    <div className="flex flex-col gap-10">
                        {/* Card 1 */}
                        <div className="flex flex-col md:flex-row items-stretch gap-6">
                            <div className="md:w-1/2">
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
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
                                <div className="rounded-[2rem] h-full  w-full">
                                    <h3 className="font-crete-round text-3xl text-[#D18601] font-semibold">Arline Way</h3>
                                    <h4 className="-mt-2 font-crete-round text-lg text-[#403933] mb-2 font-outfit tracking-tight  font-semibold">Eugene Oregon</h4>
                                    <p className=" font-outfit md:text-lg">
                                        Nestled deep in the trees, but still only five minutes from town.
                                    </p>
                                    <p className=" font-outfit md:text-lg">
                                        Imagine waking in the morning and looking out at this view, without even getting out of bed.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 - alternate layout on md+ */}
                        <div className="flex flex-col md:flex-row-reverse items-stretch gap-6">
                            <div className="md:w-1/2">
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
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
                                <div className="rounded-[2rem] h-full  w-full">
                                    <h3 className="font-crete-round text-3xl text-[#D18601] font-semibold">Woodland Drive</h3>
                                    <h4 className="-mt-2 font-crete-round text-lg text-[#403933] mb-2 font-outfit tracking-tight  font-semibold">Roseburg Oregon</h4>
                                    <p className=" font-outfit md:text-lg">
                                        What a view! This gorgeous property overlooks Abacela Vineyards in Winston.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className=" w-full ">
                <div className="max-w-4xl h-full mx-auto p-4">

                    <div className="py-20">
                        <div className="-mt-40 mb-40 h-0" id="testimonials"></div>
                        <h2 className="font-semibold  text-[#403933] font-outfit tracking-tight  text-center  text-[2.4rem] leading-12 md:leading-18 md:text-[4rem] ">Testimonials</h2>
                        <h3 className="font-medium  text-[#403933] font-outfit tracking-tight text-[1.4rem] leading-6 md:leading-10 md:text-[2.3rem] text-center">
                            Read what others have to say about my work.
                        </h3>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="max-w-2xl text-center font-outfit text-xl leading-6  md:text-2xl md:leading-7 italic">
                            &ldquo;Lukas designed our school website and the process was wonderful.
                            He listened carefully to our needs, creatively suggested solutions,
                            and quickly provided exactly what we needed. If you need a website, blog,
                            or custom solution, I wholeheartedly recommend Lukas Hahn&rdquo;
                        </p>
                        <p className="font-outfit text-[#403933] text-[1.2rem] mt-4 text-center leading-4">—<span className="font-semibold text-xl">Mark Vickers Ph.D.</span><br />Former Principal, Calvary Christian Academy</p>
                    </div>


                    <div className="flex flex-col items-center  pt-20">
                        <p className="max-w-2xl text-center font-outfit text-xl leading-6 md:text-2xl md:leading-7 italic">
                            &ldquo;I highly recommend Lukas and his services. He is professional, creative, and truly passionate about what he does.
                            With clear communication, attention to detail, and dedication, he made the entire experience smooth and enjoyable.
                            He was bold with suggestions and humble to hear vision. He went above and beyond to meet my business needs,
                            and the final results exceeded expectations.
                            He continues to be supportive with services he offers for our business ongoing.&rdquo;
                        </p>
                        <p className="font-outfit text-[#403933] text-[1.2rem] mt-4 text-center leading-4">—<span className="font-semibold text-xl">Amber Hahn</span><br />Owner of Golden Morning Flower Farm in Roseburg.</p>
                    </div>


                    <div className="flex flex-col items-center  pt-20">
                        <p className="max-w-2xl text-center font-outfit text-xl leading-6  md:text-2xl md:leading-7 italic">
                            &ldquo;Lukas has done an excellent job for me every time I needed video content
                            for my social media and branding for my music project. He is always a good
                            hang, collaborative, creative, and gets high quality content done in a timely
                            fashion.&rdquo;
                        </p>
                        <p className="font-outfit text-[#403933] text-[1.2rem] mt-4 text-center leading-4">—<span className="font-semibold text-xl">Brandon Plumblee</span><br />Artist, songwriter and musician from Roseburg.</p>
                    </div>



                </div>



            </div>

            <div className="w-full mt-16 bg-[#F2EBE8]">
                <div className="max-w-4xl h-full mx-auto p-4 pb-32">

                    <div className="pt-20 pb-8">
                        <div className="-mt-40 mb-40 h-0" id="contact"></div>
                        <h2 className="font-semibold  text-[#403933] font-outfit tracking-tight text-center  text-[2.4rem] leading-12 md:leading-18 md:text-[4rem]">
                            Contact
                        </h2>

                    </div>

                    <div className="bg-[#F2EBE8] rounded-[2rem] p-8 md:p-12 flex flex-col-reverse md:flex-row gap-10 border-4 border-[#D1860155]">

                        <div className="flex-1">
                            <p className="text-[#D18601] font-semibold uppercase tracking-[0.2em] font-outfit text-sm mb-3  hidden md:block">
                                Get In Touch
                            </p>

                            <h3 className="text-[2.5rem] leading-9 font-semibold tracking-tight text-[#403933] font-outfit mb-4 hidden md:block">
                                Ready to build something professional?
                            </h3>

                            <p className="text-lg font-outfit text-[#403933] opacity-80 max-w-md  hidden md:block">
                                Whether you need a custom website, social media content, business photography, or video production, I’d love to hear about your project.
                            </p>

                            <div className="flex flex-col gap-2 mt-10 font-outfit text-lg text-center md:text-left">
                                <div>
                                    <p className="text-sm   text-[#403933] opacity-50">
                                        Email
                                    </p>
                                    <p className="font-medium text-[#403933]">lukas@lukashahn.art</p>
                                </div>
                                <div>
                                    <p className="text-sm   text-[#403933] opacity-50">
                                        Phone
                                    </p>
                                    <p className="font-medium text-[#403933]">
                                        +1 541 430 3372
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm   text-[#403933] opacity-50">
                                        Location
                                    </p>
                                    <p className="font-medium text-[#403933]">Roseburg & Eugene, Oregon</p>
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
                                    <label className="block text-sm font-outfit  text-[#403933] opacity-60 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                        className="w-full rounded-md bg-white px-5 py-4 font-outfit text-lg outline-none border-2 border-transparent focus:border-[#D18601] transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-outfit  text-[#403933] opacity-60 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        required
                                        className="w-full rounded-md bg-white px-5 py-4 font-outfit text-lg outline-none border-2 border-transparent focus:border-[#D18601] transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-outfit  text-[#403933] opacity-60 mb-1">
                                        Project Details
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell me a little about your project..."
                                        required
                                        rows={6}
                                        className="w-full rounded-md bg-white px-5 py-4 font-outfit text-lg outline-none border-2 border-transparent focus:border-[#D18601] transition resize-none"
                                    />
                                </div>

                                <button className="bg-[#D18601] text-white rounded-2xl px-8 py-4 text-xl font-crete-round hover:opacity-90 transition w-full font-semibold">
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}