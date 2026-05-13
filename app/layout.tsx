import type { Metadata } from "next";
import { Inter, Noto_Serif, Outfit, Crete_Round } from "next/font/google";
import "./globals.css";
import Header from "@/lib/components/header";
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const creteRound = Crete_Round({
  variable: '--font-crete-round',
  weight: '400'
});


const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
});


const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "lukashahn.art | Websites and Media for Local Roseburg and Eugene Businesses",
  description: "Websites and media creation for local businesses in Roseburg and Eugene area. Services including building and designing websites, promotinal videos, product photos, social media management.",
  openGraph: {
    images: ["/opengraph.png"],
    title: "lukashahn.art | Websites and Media for Local Roseburg and Eugene Businesses",
    description: "Websites and media creation for local businesses in Roseburg and Eugene area. Services including building and designing websites, promotinal videos, product photos, social media management.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSerif.variable} ${outfit.variable}  ${creteRound.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F9F4F1]">
        <Header></Header>
        {children}</body>
    </html>
  );
}
