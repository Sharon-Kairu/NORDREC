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
  title: "NORDREC",
  description: "Advancing sustainable dryland regeneration across Northern Kenya through training, research, and innovation.",
  openGraph: {
    title: 'NORDREC - Northern Dryland Resource Centre',
    description:
      'Empowering dryland communities with sustainable farming and regeneration practices.',
    url: 'https://nordrec.org/',
    siteName: 'NORDREC',
    images: [
      {
        url: 'https://nordrec.org/logo-removebg-preview.png', 
        width: 1200,
        height: 630,
        alt: 'NORDREC Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NORDREC - Northern Dryland Resource Centre',
    description:
      'Empowering dryland communities with sustainable farming and regeneration practices.',
    images: ['https://nordrec.org/logo-removebg-preview.png'],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden `}
      >
        <ResponsiveNav/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
