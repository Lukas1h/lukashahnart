export default function WeddingPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <img src="/wedding.png" alt="Lukas & Anjel, September 19, 2026" />

      <div className="text-center text-[#3a2f28] pt-10 pb-20">
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className="h-px w-16 bg-[#3a2f28]/30" />
          <span className="text-xl">✦</span>
          <span className="h-px w-16 bg-[#3a2f28]/30" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-14 max-w-2xl mx-auto">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#3a2f28]/70">
              When
            </p>
            <p className="text-2xl font-semibold mt-2">September 19, 2026</p>
            <p className="italic text-lg mt-1 text-[#3a2f28]/80">4:00 PM</p>
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#3a2f28]/70">
              Where
            </p>
            <p className="text-2xl font-semibold mt-2">668 Winston Section Rd</p>
            <p className="italic text-lg mt-1 text-[#3a2f28]/80">Ceremony & Reception</p>
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#3a2f28]/70">
              Dress Code
            </p>
            <p className="text-2xl font-semibold mt-2">Semi-Casual</p>
            <p className="italic text-lg mt-1 text-[#3a2f28]/80">Fall colors encouraged</p>
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#3a2f28]/70">
              Registry
            </p>
            <p className="text-2xl font-semibold mt-2">The Knot</p>
            <p className="text-sm mt-1 text-[#3a2f28]/70 max-w-[220px] mx-auto">
              Your presence is the only gift we need — but if you&apos;d like to bless us, our registry is below.
            </p>
            <a
              href="https://registry.theknot.com/anjel-csernak-lukas-hahn-september-2026/74730750"
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-lg mt-1 inline-block text-[#3a2f28]/80 underline underline-offset-4 decoration-[#3a2f28]/40 hover:text-[#3a2f28] transition"
            >
              View Registry →
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-14">
          <span className="h-px w-16 bg-[#3a2f28]/30" />
          <span className="font-script text-3xl leading-none pb-1">Lukas &amp; Anjel</span>
          <span className="h-px w-16 bg-[#3a2f28]/30" />
        </div>
      </div>
    </div>
  );
}
