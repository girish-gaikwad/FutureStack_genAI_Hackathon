import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Car } from "lucide-react";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "StudySnap",
  description: "SyllabusMate (formerly AI Tutor Lite) is an AI-powered study assistant that helps students learn directly from their official textbooks. Unlike generic AI tutors that pull random answers from the internet, SyllabusMate grounds every explanation in the board-approved curriculum (CBSE, TN State, ICSE, or any uploaded book).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400&display=swap" />
      </head>
      <body className="font-sans antialiased">{children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
