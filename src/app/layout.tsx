import type { Metadata } from "next";
import { Caveat, Dancing_Script, Indie_Flower } from "next/font/google";
import "../styles/globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const indieFlower = Indie_Flower({
  variable: "--font-indie-flower",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Valentine's Week Experience",
  description:
    "A special Valentine's Week journey filled with love and surprises",
  keywords: ["valentine", "love", "romance", "valentine's week"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${caveat.variable} ${dancingScript.variable} ${indieFlower.variable} antialiased min-h-screen custom-scrollbar font-caveat`}
      >
        {children}
      </body>
    </html>
  );
}
