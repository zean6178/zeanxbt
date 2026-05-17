import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "zeanXBT | AI × Web3 × Future",
  description:
    "AI Video Creator & Web3 Enthusiast. Creating cinematic AI-generated videos pushing the boundaries of creativity and technology.",
  keywords: ["AI Video", "Web3", "zeanXBT", "AI Creator", "Generative AI"],
  openGraph: {
    title: "zeanXBT | AI × Web3 × Future",
    description:
      "AI Video Creator & Web3 Enthusiast. Creating cinematic AI-generated videos.",
    type: "website",
    url: "https://zeanxbt.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "zeanXBT | AI × Web3 × Future",
    description:
      "AI Video Creator & Web3 Enthusiast. Creating cinematic AI-generated videos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#e8e8ed]">
        {children}
      </body>
    </html>
  );
}
