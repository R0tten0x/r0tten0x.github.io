import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ScanlineOverlay from "@/components/ScanlineOverlay";
import NoiseTexture from "@/components/NoiseTexture";

export const runtime = 'edge';

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const leagueGothic = localFont({
  src: "../../public/fonts/LeagueGothic-Regular.woff",
  variable: "--font-league",
  display: "swap",
});

export const metadata: Metadata = {
  title: "R0tten0x | Software Engineer",
  description:
    "Robert | R0tten0x — Software Engineer & Fullstack Developer. 27+ years in IT, building modern applications.",
  openGraph: {
    title: "R0tten0x | Software Engineer",
    description:
      "Software Engineer & Fullstack Developer. 27+ years in IT.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} ${leagueGothic.variable} font-mono antialiased bg-cyber-black text-gray-200`}
      >
        {children}
        <ScanlineOverlay />
        <NoiseTexture />
      </body>
    </html>
  );
}
