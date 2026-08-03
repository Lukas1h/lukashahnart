import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Hahn Media | High-End Real Estate Media";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    const [notoSerifBold, outfitMedium, bg] = await Promise.all([
        readFile(join(process.cwd(), "app/real-estate/NotoSerif-Bold.woff")),
        readFile(join(process.cwd(), "app/real-estate/Outfit-Medium.woff")),
        readFile(join(process.cwd(), "app/real-estate/og-bg.jpg")),
    ]);
    const bgSrc = `data:image/jpeg;base64,${bg.toString("base64")}`;

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={bgSrc}
                    width={1200}
                    height={630}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 18,
                    }}
                >
                    <div
                        style={{
                            fontFamily: "Noto Serif",
                            fontWeight: 700,
                            fontSize: 104,
                            color: "#F9F4F1",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Hahn Media
                    </div>
                    <div
                        style={{
                            fontFamily: "Outfit",
                            fontWeight: 500,
                            fontSize: 26,
                            color: "#F9F4F1",
                            letterSpacing: "0.4em",
                            textTransform: "uppercase",
                        }}
                    >
                        High-End Real Estate Media
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                { name: "Noto Serif", data: notoSerifBold, style: "normal", weight: 700 },
                { name: "Outfit", data: outfitMedium, style: "normal", weight: 500 },
            ],
        }
    );
}
