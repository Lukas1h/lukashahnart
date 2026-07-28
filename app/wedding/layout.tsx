import type { Metadata } from "next";
import { Poppins, Mrs_Saint_Delafield } from "next/font/google";
import "./wedding.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const script = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Lukas & Anjel are getting married",
};

export default function WeddingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${script.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
