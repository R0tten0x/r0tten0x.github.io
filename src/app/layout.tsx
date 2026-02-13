import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "R0tten0x - Portfolio",
  description: "The portfolio of a full-stack software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
