"use client";

import { useEffect, useRef, useState } from "react";

declare global {
    interface Window {
        YT: any;
        onYouTubeIframeAPIReady: (() => void) | undefined;
    }
}

export default function HeroVideo({ videoId, title }: { videoId: string; title: string }) {
    const iframeId = "hero-video-player";
    const playerRef = useRef<any>(null);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        function createPlayer() {
            playerRef.current = new window.YT.Player(iframeId, {
                events: {
                    onReady: () => {},
                },
            });
        }

        if (window.YT && window.YT.Player) {
            createPlayer();
            return;
        }

        const existingCallback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
            existingCallback?.();
            createPlayer();
        };

        if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
            const script = document.createElement("script");
            script.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(script);
        }
    }, []);

    const toggleMute = () => {
        const player = playerRef.current;
        if (!player) return;

        if (muted) {
            player.unMute();
            player.setVolume(100);
            setMuted(false);
        } else {
            player.mute();
            setMuted(true);
        }
    };

    return (
        <>
            <iframe
                id={iframeId}
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1`}
                title={title}
                allow="autoplay; encrypted-media; picture-in-picture"
                className="pointer-events-none absolute inset-0 h-full w-full"
            />
            <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Unmute video" : "Mute video"}
                className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#F9F4F1]/70 bg-black/30 backdrop-blur-sm transition hover:border-[#F9F4F1] hover:bg-black/50"
            >
                {muted ? (
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-[#F9F4F1]" strokeWidth={1.5}>
                        <path d="M4 9v6h4l5 5V4L8 9H4z" strokeLinejoin="round" />
                        <path d="M16 9l5 6M21 9l-5 6" strokeLinecap="round" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-[#F9F4F1]" strokeWidth={1.5}>
                        <path d="M4 9v6h4l5 5V4L8 9H4z" strokeLinejoin="round" />
                        <path d="M16 8a5 5 0 010 8M19 5a9 9 0 010 14" strokeLinecap="round" />
                    </svg>
                )}
            </button>
        </>
    );
}
