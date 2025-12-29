import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for a clean, tech look
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PulseSynth - Audio Reactive Glow",
  description: "Immersive ambient lighting for your browser. Audio-first, GPU-accelerated.",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-dark-bg text-gray-100 min-h-screen relative overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
