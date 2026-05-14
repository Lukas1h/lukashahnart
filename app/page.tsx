import Header from "@/lib/components/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans ">



      {/* Hero */}
      <main className="z-0 h-[95vh] flex items-center justify-center  -mt-24 relative ">


        <div className="flex-col flex-1 items-center justify-center text-center px-6 z-10 max-w-3xl p-4 w-100%">
          <div className="max-w-screen mx-auto">

            <p className=" font-extrabold font-crete-round tracking-tighter text-[2.5rem] leading-2 md:text-[4.5rem] md:leading-4 mb-6 text-[#D18601]">lukashahn.art</p>
            <h2 className="font-semibold  text-[1.2rem] leading-5 md:text-[2.3rem] md:leading-10  text-[#403933] font-outfit tracking-tight ">
              Websites and media creation for local businesses in <span className="text-[#D18601]">Roseburg</span> and <span className="text-[#D18601]">Eugene</span> area.
            </h2>


          </div>
          <div className="flex mt-2 md:mt-4 justify-center gap-[2px] md:gap-2 text-md  md:text-2xl font-outfit">
            <p>Websites</p>
            <p >•</p>
            <p>Video</p>
            <p >•</p>
            <p>Social Media</p>
            <p >•</p>
            <p>Photography</p>
          </div>
        </div>


        <div className="absolute flex flex-col justify-between inset-0 h-full z-10 pointer-events-none">
          <div className="absolute top-0 right-0 left-0 h-17.75 bg-[linear-gradient(180deg,#F9F4F1_17.31%,rgba(255,255,255,0)_100%)]"></div>
          <div className="absolute bottom-0 right-0 left-0 h-17.75 bg-[linear-gradient(0deg,#F9F4F1_17.31%,rgba(255,255,255,0)_100%)]"></div>
        </div>

        <div className="absolute flex flex-col justify-between inset-0 pointer-events-none hero-backgound">
          <img src="/dashes-top-desktop.svg" className="hidden sm:block" />
          <img src="/dashes-bottom-desktop.svg" className="hidden sm:block" />
          <img src="/dashes-top-mobile.svg" alt="" className="block sm:hidden" />
          <img src="/dashes-bottom-mobile.svg" alt="" className="block sm:hidden" />
        </div>
      </main>

      {/* Services */}
      <div className="bg-[#F2EBE8] w-full">
        <div className="max-w-4xl h-full mx-auto p-4">
          <div className="-mt-40 mb-40 h-0" id="services"></div>
          <h2 className="font-semibold text-[2.2rem] md:text-[3rem] text-[#403933] font-outfit tracking-tight  text-center md:mb-8">Services</h2>


          {/* Custom Built Websites */}
          <div className="flex gap-4 mt-20 flex-col md:flex-row">
            <img src={"/media/custom-websites.svg"} className="flex-1  h-100 "></img>



            <div className="flex-1">
              <h3 className="text-3xl font-outfit tracking-tight font-semibold text-[#403933] mb-1">
                Custom Built Websites
              </h3>

              <p className="text-lg font-outfit">
                Custom built modern websites for local businesses with engaging content,
                contact forms, online storefronts with optimized SEO to rank higher than
                your competitors in search results.

              </p>

              <p className="text-lg font-outfit mt-4">
                Website projects can include custom design, mobile optimization, SEO
                basics, landing pages, portfolio websites, business sites, and ongoing
                maintenance when needed.
              </p>

              <p className="text-lg font-outfit mt-4 font-semibold">
                Starting at $599.
              </p>

              <div className="flex flex-wrap gap-3 mt-6 font-outfit ">
                <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                  Responsive Design
                </span>

                <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                  SEO Basics
                </span>

                <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                  Fast Performance
                </span>

                <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                  Ongoing Maintenance
                </span>
              </div>
            </div>
          </div>

          {/* Video Services */}
          <div className="flex gap-4 mt-20 flex-col md:flex-row">
            <img src={"/media/video-services.svg"} className="md:hidden"></img>
            <div className="flex-1">
              <h3 className="text-3xl font-outfit tracking-tight font-semibold text-[#403933] mb-1">
                Video Services
              </h3>


              <p className="text-lg font-outfit">
                Services include short-form vertical videos, promotional content, event
                coverage, interviews, podcasts, sports edits, and cinematic highlight
                videos tailored to your audience.
              </p>
              <p className="text-lg font-outfit mt-4 font-semibold">
                Starting at $99.
              </p>



              <div className="flex flex-wrap gap-3 mt-6 font-outfit">
                <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                  Reels & TikToks
                </span>

                <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                  Event Coverage
                </span>

                <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                  Podcast Production
                </span>

                <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                  Sports Videos
                </span>
              </div>
            </div>

            <img src={"/media/video-services.svg"} className="flex-1  h-100 hidden md:block"></img>
          </div>

          {/* Photo Shoots */}
          <div className="flex gap-4 mt-20 pb-20 flex-col md:flex-row">
            <img src={"/media/photo-services.svg"} className="flex-1  h-100 "></img>

            <div className="flex-1">
              <h3 className="text-3xl font-outfit tracking-tight font-semibold text-[#403933] mb-1">
                Photo Shoots
              </h3>

              <p className="text-lg font-outfit">
                Photo sessions for senior portraits, business branding photos,
                sports photography, events, product photography, and content for social
                media or websites.
              </p>
              <p className="text-lg font-outfit mt-4 font-semibold">
                Starting at $99.
              </p>

              <div className="flex flex-wrap gap-3 mt-6 font-outfit">
                <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                  Senior Photos
                </span>

                <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                  Brand Photography
                </span>

                <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                  Sports Photography
                </span>

                <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                  Event Photography
                </span>
              </div>
            </div>
          </div>

        </div>



      </div>


      <div className=" w-full">
        <div className="max-w-4xl h-full mx-auto p-4">
          <div className="pt-20">
            <div className="-mt-40 mb-40 h-0" id="portfolio"></div>
            <h2 className="font-semibold  text-[#403933] font-outfit tracking-tight  text-center text-[2.4rem] leading-12 md:leading-18 md:text-[4rem]">Featured Projects</h2>
            <h3 className="font-medium  text-[#403933] font-outfit tracking-tight text-[1.4rem] leading-6 md:leading-10 md:text-[2.3rem] text-center">
              See how we help local business and individuals grow their media presense.
            </h3>
          </div>


          <hr className="mt-20 mb-16 border border-[#403933] rounded-full opacity-30" />

          {/* Golden Morning */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
            <img
              src="/media/websites/gm/gm.svg"
              alt="Golden Morning project"
              className="max-w-2xl w-full"
            />
            <div className="flex flex-wrap justify-center gap-3 font-outfit -mt-6">
              <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                Brand Identity
              </span>
              <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                Custom Website
              </span>
              <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                Photography
              </span>
              <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                Video Content
              </span>
            </div>

            <p className=" text-lg md:text-xl font-outfit ">
              Golden Morning is a local, family-owned flower farm and florist focused on
              seasonal arrangements, community events, and curated floral experiences.
            </p>

            <p className=" text-lg md:text-xl font-outfit ">
              The brand was built from the ground up, including logo design, business
              cards, stickers, and a custom website with an integrated online market.
              Supporting media was also created, including promotional photography and
              short-form video content for social media and marketing campaigns.
            </p>
            <div>
              <img src="/media/websites/gm/gm_logo.svg" alt="" className="h-24 inline-block p-2" />
              <img src="/media/websites/gm/gm.svg" alt="" className="h-24 inline-block p-2" />
              <img src="/media/websites/gm/gm.png" alt="" className="w-[48%] inline-block shadow-xl rounded-md m-1" />
              <img src="/media/websites/gm/gm_market.png" alt="" className="w-[48%] inline-block shadow-xl rounded-md m-1" />
              <img src="/media/websites/gm/flower1.jpg" alt="" className="w-[48%] inline-block shadow-xl rounded-md m-1" />
              <img src="/media/websites/gm/market.jpg" alt="" className="w-[48%] inline-block shadow-xl rounded-md m-1" />
            </div>

          </div>

          <hr className="mt-20 mb-16 border border-[#403933] rounded-full opacity-30" />

          {/* Calvary Christian Academy */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
            <img
              src="/media/websites/cca/logo.svg"
              alt="Golden Morning project"
              className="max-w-50 w-full"
            />
            <h3 className="font-semibold text-[2.3rem] text-[#403933] font-outfit tracking-tight leading-10 text-center">
              Cavlary Christian Acadmey
            </h3>
            <div className="flex flex-wrap justify-center gap-3 font-outfit">
              <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                Brand Identity
              </span>
              <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                Custom Website
              </span>
              <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                Photography
              </span>
              <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                Video Content
              </span>
            </div>

            <p className=" text-lg md:text-xl font-outfit ">
              Calvary Christian Academy is a private K–12 Christian school in Roseburg focused on Christ-centered education, strong academics, and building meaningful relationships between students, teachers, and families. The school emphasizes character development, small class sizes, and creating a safe, welcoming environment for students to grow.
            </p>

            <p className=" text-lg md:text-xl font-outfit ">
              For this project, a completely custom website was designed and developed from the ground up for CCA. The site includes admissions forms, faculty and teacher bios, an updateable school calendar, slideshows, and dedicated pages for academics, testimonials, employment opportunities, and school information. In addition to the website, professional photography and cinematic drone footage were captured to help showcase the campus, classrooms, and student life throughout the site.
            </p>
            <div>

              <img src="/media/websites/cca/page1.png" alt="" className=" inline-block shadow-2xl rounded-md m-1 " />
              <img src="/media/websites/cca/page2.png" alt="" className="w-[48%] inline-block shadow-2xl rounded-md m-1 " />
              <img src="/media/websites/cca/page3.png" alt="" className="w-[48%] inline-block shadow-2xl rounded-md m-1 " />
              <img src="/media/websites/cca/grad.png" alt="" className="w-[48%] inline-block shadow-2xl rounded-md m-1 " />
              <img src="/media/websites/cca/page4.png" alt="" className="w-[48%] inline-block shadow-2xl rounded-md m-1 " />

              <img src="/media/websites/cca/kid.jpg" alt="" className="w-[48%] inline-block shadow-2xl rounded-md m-1 " />
              <img src="/media/websites/cca/fitness.jpg" alt="" className="w-[48%] inline-block shadow-2xl rounded-md m-1 " />
              <img src="/media/websites/cca/travis.jpg" alt="" className="w-[48%] inline-block shadow-2xl rounded-md m-1 " />
              <img src="/media/websites/cca/class.jpg" alt="" className="w-[48%] inline-block shadow-2xl rounded-md m-1 " />
              <img src="/media/websites/cca/fitness2.jpg" alt="" className="w-[48%] inline-block shadow-2xl rounded-md m-1 " />
              <img src="/media/websites/cca/chapel.jpg" alt="" className="w-[48%] inline-block shadow-2xl rounded-md m-1 " />


            </div>

          </div>

          <hr className="mt-20 mb-16 border border-[#403933] rounded-full opacity-30" />

          {/* Statewide Exhaust */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
            <img
              src="/media/websites/statewide/statewide.webp"
              alt="Golden Morning project"
              className="max-w-2xl w-full"
            />
            <div className="flex flex-wrap justify-center gap-3 font-outfit -mt-2">
              <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                Custom Website
              </span>
              <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                SEO
              </span>
            </div>

            <p className=" text-lg md:text-xl font-outfit ">
              Statewide Exhaust Services is a family-owned Oregon-based exhaust and cleaning company serving commercial clients across the state, including Eugene and Roseburg.
            </p>

            <p className=" text-lg md:text-xl font-outfit ">
              For this project, a full website was designed and developed from the ground up to establish a clear online presence and make it easy for clients to find and contact the business. The site was also structured to rank #1 for search results for hood cleaning searches in the Eugene and Roseburg areas.
            </p>
            <div>

              <img src="/media/websites/statewide/statewide.png" alt="" className="w-[48%] inline-block shadow-xl rounded-md m-1" />
              <img src="/media/websites/statewide/statewide2.png" alt="" className="w-[48%] inline-block shadow-xl rounded-md m-1" />
            </div>

          </div>


          <hr className="mt-20 mb-16 border border-[#403933] rounded-full opacity-30" />

          {/* Video Work */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
            <h3 className="font-semibold text-[2.3rem] text-[#403933] font-outfit tracking-tight leading-10 text-center">
              Video Work
            </h3>
            <div className="flex flex-wrap justify-center gap-3 font-outfit">
              <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                Short Form
              </span>
              <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                Interviews
              </span>
              <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                Event Coverage
              </span>
              <span className="bg-[#E6DDD8] px-4 py-2 rounded-full">
                Podcasts
              </span>
            </div>

            <p className=" text-lg md:text-xl font-outfit ">
              Professional video content created for businesses, creators, athletes, musicians, and local organizations. Projects range from short-form social media content and podcasts to cinematic interviews, promotional campaigns, sports edits, and behind-the-scenes coverage designed to help brands stand out online.
            </p>

            <div>

              <img src="/media/video/brandon_still_2.jpg" alt="" className=" inline-block shadow-2xl rounded-md m-1 " />
              <div className=" flex-col w-[48%] inline-flex">
                <img src="/media/video/podcast_1.2.1.jpg" alt="" className="inline-block shadow-2xl rounded-md m-1 " />
                <img src="/media/video/podcast_viewfinder.jpeg" alt="" className="inline-block shadow-2xl rounded-md m-1 " />

              </div>
              <img src="/media/video/podcast_bts.jpg" alt="" className="w-[48%] inline-block shadow-2xl rounded-md m-1 " />
              <img src="/media/video/james.png" alt="" className=" inline-block shadow-2xl rounded-md m-1 " />
              <img src="/media/video/mens_still_1.1.1.jpg" alt="" className=" inline-block shadow-2xl rounded-md m-1 " />




            </div>

          </div>


        </div>
      </div>

      <div className="bg-[#F2EBE8] w-full mt-16">
        <div className="max-w-4xl h-full mx-auto p-4 pb-50">

          <div className="py-20">
            <div className="-mt-40 mb-40 h-0" id="testimonials"></div>
            <h2 className="font-semibold  text-[#403933] font-outfit tracking-tight  text-center  text-[2.4rem] leading-12 md:leading-18 md:text-[4rem] ">Testimonials</h2>
            <h3 className="font-medium  text-[#403933] font-outfit tracking-tight text-[1.4rem] leading-6 md:leading-10 md:text-[2.3rem] text-center">
              Read what others have to say about our work.
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <p className="max-w-2xl text-center font-outfit text-xl leading-6 md:text-3xl md:leading-8 italic">
              &ldquo;Lukas designed our school website and the process was wonderful.
              He listened carefully to our needs,creatively suggested solutions,
              and quickly provided exactly what we needed. If you need a website, blog,
              or custom solution, I wholeheartedly recommend Lukas Hahn&rdquo;
            </p>
            <p className="font-outfit text-[#403933] text-[1.2rem] mt-4 text-center leading-4">—<span className="font-semibold text-xl">Mark Vickers Ph.D.</span><br />Former Principal, Calvary Christian Academy</p>
          </div>


          <div className="flex flex-col items-center  pt-20">
            <p className="max-w-2xl text-center font-outfit text-xl leading-6 md:text-3xl md:leading-8 italic">
              &ldquo;Lukas has done an excellent job for me every time I needed video content
              for my social media and branding for my music project. He is always a good
              hang, collaborative, creative, and gets high quality content done in a timely
              fashion.&rdquo;
            </p>
            <p className="font-outfit text-[#403933] text-[1.2rem] mt-4 text-center leading-4">—<span className="font-semibold text-xl">Brandon Plumblee</span><br />Artist, songwriter and musician from Roseburg.</p>
          </div>



        </div>



      </div>

      <div className="w-full mt-16">
        <div className="max-w-4xl h-full mx-auto p-4 pb-32">

          <div className="pt-20 pb-12">
            <div className="-mt-40 mb-40 h-0" id="contact"></div>
            <h2 className="font-semibold  text-[#403933] font-outfit tracking-tight text-center  text-[2.4rem] leading-12 md:leading-18 md:text-[4rem]">
              Contact
            </h2>

            <h3 className="font-medium  text-[#403933] font-outfit tracking-tight text-[1.4rem] leading-6 md:leading-10 md:text-[2.3rem]  text-center max-w-2xl mx-auto mt-4">
              Let’s talk about your next website, video project, or content campaign.
            </h3>
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

