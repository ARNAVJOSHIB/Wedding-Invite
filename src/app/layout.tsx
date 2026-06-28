import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Poppins, Ballet, Corinthia } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const ballet = Ballet({
  subsets: ["latin"],
  variable: "--font-ballet",
});

const corinthia = Corinthia({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-corinthia",
});

export const metadata: Metadata = {
  title: "Bhagyashree & Shrikant | Wedding Invitation",
  description: "Join us in celebrating the wedding of Bhagyashree and Shrikant on Friday, 3rd July 2026 at Parinay Bandh, Amravati.",
  openGraph: {
    title: "Bhagyashree & Shrikant | Wedding Invitation",
    description: "We joyfully invite you to our wedding ceremony on Friday, 03.07.2026. Parinay Bandh, Amravati.",
    type: "website",
    locale: "en_IN",
    siteName: "Bhagyashree & Shrikant Wedding",
    images: [
      {
        url: "/images/couple.jpg",
        width: 1200,
        height: 630,
        alt: "Bhagyashree & Shrikant Wedding Invitation",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lora.variable} ${poppins.variable} ${ballet.variable} ${corinthia.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-wedding-gold selection:text-white">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
