import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://r0tten0x.dev"),
  title: "Robert (R0tten0x) | Rust Developer: macOS Utilities & System Observers",
  description:
    "Systems and Rust developer with 27 years in IT. Building menu bar utilities, background daemons, and terminal system observers for macOS.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Robert (R0tten0x) | Rust Developer: macOS Utilities & System Observers",
    description:
      "Systems and Rust developer with 27 years in IT. Building menu bar utilities, background daemons, and terminal system observers for macOS.",
    url: "https://r0tten0x.dev",
    siteName: "R0tten0x",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "R0tten0x — Rust developer building macOS utilities and system observers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert (R0tten0x) | Rust Developer: macOS Utilities & System Observers",
    description:
      "Systems and Rust developer with 27 years in IT. Menu bar utilities, daemons, and terminal observers for macOS.",
    images: ["/og-image.png"],
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert",
  alternateName: "R0tten0x",
  url: "https://r0tten0x.dev",
  jobTitle: "Systems & Rust Developer",
  description:
    "Independent systems and Rust developer with 27 years in IT, building automation tools and system observers for macOS.",
  sameAs: ["https://github.com/R0tten0x"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${jetbrains.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
