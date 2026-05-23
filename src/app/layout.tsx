import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ZEANXBT | AI × Web3 × Future",
  description:
    "Full-time Web3 Moderator & Ambassador. AI Video Creator. Building Communities Beyond Web2.",
  keywords: [
    "Web3",
    "AI Creator",
    "zeanXBT",
    "Community Builder",
    "Moderator",
    "Ambassador",
    "AI Video",
    "Blockchain",
  ],
  openGraph: {
    title: "ZEANXBT | AI × Web3 × Future",
    description:
      "Full-time Web3 Moderator & Ambassador. AI Video Creator. Building Communities Beyond Web2.",
    type: "website",
    url: "https://zeanxbt.xyz",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZEANXBT | AI × Web3 × Future",
    description:
      "Full-time Web3 Moderator & Ambassador. AI Video Creator. Building Communities Beyond Web2.",
    creator: "@zeandrn",
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
      className={`${orbitron.variable} ${exo2.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-[#e8e8ed]">
        {children}
      </body>
    </html>
  );
}
