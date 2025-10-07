import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import ResponsiveNav from "./components/Navigation/ResponsiveNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nordrec.org'),
  title: "NORDREC",
  description: "Advancing sustainable dryland regeneration across Northern Kenya through training, research, and innovation.",
  openGraph: {
    images: '/logo-removebg-preview.png', 
  },
  twitter: {
    card: 'summary_large_image', // Use 'summary_large_image' for a prominent display
    images: '/logo-removebg-preview.png',
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden `}
      >
        <ResponsiveNav/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
