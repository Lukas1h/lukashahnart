import Header from "@/lib/components/header";
import Link from "next/link";

export default function Home() {
    return (
        <div className="h-screen flex flex-col font-sans bg-[#FAF7F5]">


            <main className="z-0 h-full flex items-center justify-center  -mt-24 relative">


                <div className="flex-col flex-1 items-center justify-center text-center px-6 z-10 max-w-2xl">
                    <div className="">


                        <h2 className="font-semibold text-[2.3rem] text-[#403933] font-outfit tracking-tight leading-10">
                            Thanks for reaching out.
                        </h2>
                        <p className="text-2xl font-outfit">
                            Your message has been sent! We'll get ahold of you
                            within the next business day to discuss your project
                            and next steps.
                        </p>

                        <p className="font-outfit text-[#403933] text-[1.2rem] mt-4 text-center leading-4">—<span className="font-semibold text-2xl">Lukas Hahn</span></p>


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

        </div>
    );
}
