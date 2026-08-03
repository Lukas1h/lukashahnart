"use client";

import { useState } from "react";

export default function YoutubeLazy({
    videoId,
    title,
}: {
    videoId: string;
    title: string;
}) {
    const [playing, setPlaying] = useState(false);

    if (playing) {
        return (
            <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
            />
        );
    }

    return (
        <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
        >
            <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={title}
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-black/25 transition group-hover:bg-black/15" />
            <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#F9F4F1]/80 transition duration-300 group-hover:scale-110 group-hover:border-[#F9F4F1]">
                    <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-[#F9F4F1]">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </span>
            </span>
        </button>
    );
}
