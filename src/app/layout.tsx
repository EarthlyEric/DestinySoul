import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const runtime = 'edge';

export const metadata: Metadata = {
  title: "DestinySoul Studio",
  description: "DestinySoul Studio 官方網站 ! 這裡提供了本工作室的作品介紹 !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="icons/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="icons/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="icons/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="icons/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="icons/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="icons/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="icons/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="icons/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="icons/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="icons/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png"/>
      </head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
