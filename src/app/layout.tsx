import type { Metadata } from "next";
import { Rajdhani, Orbitron } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const michroma = localFont({
  src: [
    {
      path: "../fonts/Michroma-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-michroma",
});

export const metadata: Metadata = {
  title: "zeanXBT — AI Video × Web3 × Content Creator",
  description:
    "Full-time Web3 Moderator & Ambassador. AI Video Creator. Web3 Community Builder.",
  keywords: [
    "Web3",
    "AI Creator",
    "zeanXBT",
    "Community Builder",
    "Moderator",
    "Ambassador",
  ],
  openGraph: {
    title: "zeanXBT — AI Video × Web3 × Content Creator",
    description:
      "Full-time Web3 Moderator & Ambassador. AI Video Creator. Web3 Community Builder.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "zeanXBT — AI Video × Web3 × Content Creator",
    description:
      "Full-time Web3 Moderator & Ambassador. AI Video Creator. Web3 Community Builder.",
    creator: "@zeanxbt",
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
      className={`${rajdhani.variable} ${orbitron.variable} ${michroma.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
