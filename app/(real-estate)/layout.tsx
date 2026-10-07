import type { Metadata } from "next";
import { Noto_Serif, Outfit } from "next/font/google";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const description =
  "Real estate photography, cinematic walkthrough video, drone photography, and floor plans for agents in Eugene and Roseburg, Oregon. Photos delivered in 24 hours.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lukashahn.art"),
  title: "Hahn Media | Real Estate Photography & Video in Eugene & Roseburg, Oregon",
  description,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Hahn Media",
    locale: "en_US",
    title: "Hahn Media | Real Estate Photography & Video in Eugene & Roseburg, Oregon",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hahn Media | Real Estate Photography & Video in Eugene & Roseburg, Oregon",
    description,
  },
};

export default function RealEstate2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${outfit.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#181A1C] font-outfit">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
