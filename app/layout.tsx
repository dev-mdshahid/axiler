import type { Metadata } from "next";
import { Geist, Geist_Mono, Rethink_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axiler — Intelligent Automation Platform",
  description:
    "Axiler empowers teams with intelligent automation. Streamline workflows, boost productivity, and scale effortlessly.",
  openGraph: {
    title: "Axiler — Intelligent Automation Platform",
    description:
      "Axiler empowers teams with intelligent automation. Streamline workflows, boost productivity, and scale effortlessly.",
    url: "https://axiler.com",
    siteName: "Axiler",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axiler — Intelligent Automation Platform",
    description:
      "Axiler empowers teams with intelligent automation. Streamline workflows, boost productivity, and scale effortlessly.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${rethinkSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
