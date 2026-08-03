import type { Metadata } from "next";
import { Noto_Serif, Outfit } from "next/font/google";
import "../globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Hahn Media | Real Estate Photo & Video",
};

export default function RealEstate2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${outfit.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-[#181A1C] text-[#F9F4F1] font-outfit">
        {children}
      </body>
    </html>
  );
}
